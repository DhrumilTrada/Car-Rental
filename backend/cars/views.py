from django.utils.dateparse import parse_date
from rest_framework import status, generics
from rest_framework.response import Response
from datetime import date
from rest_framework.decorators import api_view
from .models import Location, Car, Customer, Booking, Review, Insurance, Maintenance, Payment
from .serializers import LocationSerializer, CarSerializer, CustomerSerializer, BookingSerializer, ReviewSerializer, InsuranceSerializer, MaintenanceSerializer, PaymentSerializer, LocationNameSerializer



@api_view(['GET'])
def view_locations(request):
    if request.method == 'GET':
        locations = Location.objects.all()
        locations = LocationNameSerializer(locations, many=True)
        return Response({'locations': locations.data}, status=status.HTTP_200_OK)
    
@api_view(['POST'])
def get_car(request):
    if request.method == 'POST' and request.data.get('location'):
        pickup = request.data.get('location')
        car = Car.objects.filter(pickup_location__name=pickup)
        car =  CarSerializer(car, many=True)
        return Response({'car': car.data}, status=status.HTTP_200_OK)
    if request.method == 'POST' and request.data.get('id'):
        car_id = request.data.get('id')
        print(car_id)
        car = Car.objects.get(id=car_id)
        car =  CarSerializer(car, many=False)
        return Response({'car': car.data}, status=status.HTTP_200_OK)
    else:
        car = Car.objects.all()
        car =  CarSerializer(car, many=True)
        return Response({'car': car.data}, status=status.HTTP_200_OK)
    
@api_view(['POST'])
def available_cars(request):
    current_date = date.today()
    end_date = parse_date(request.data.get('pickup_date'))
    print(current_date, end_date)
    unavailable_cars = Booking.objects.filter(pickup_date__lte=end_date, end_date__gte=current_date)
    if unavailable_cars:
        available_cars = Car.objects.exclude(id__in=unavailable_cars.values_list('car_id', flat=True))
        unavailable_cars = Car.objects.filter(id__in=unavailable_cars.values_list('car_id', flat=True))
        unavailable_cars = CarSerializer(unavailable_cars, many=True)
        car_serializer = CarSerializer(available_cars, many=True)
        return Response({'available': car_serializer.data, 'unavailable': unavailable_cars.data}, status=status.HTTP_200_OK)
    else:
        car_serializer = CarSerializer(Car.objects.all(), many=True)
        return Response({'available': car_serializer.data, 'unavailable': {}}, status=status.HTTP_200_OK)

@api_view(['GET'])
def view_bookings(request):
    if request.method == 'GET':
        bookings = Booking.objects.all()
        bookings = BookingSerializer(bookings, many=True)
        customer_id = Customer.objects.get(user=1)
        bookings_user = Booking.objects.filter(customer=customer_id.id)
        # print(bookings_user[0].car, bookings_user[1].car)
        return Response({'bookings': bookings.data}, status=status.HTTP_200_OK)


@api_view(['POST'])
def book_car(request):
    user = request.user
    car_id = request.data.get('car_id')
    current_date = date.today()
    end_date = parse_date(request.data.get('pickup_date'))

    # Create a new booking
    booking = Booking.objects.create(
        user=user,
        car_id=car_id,
        start_date=current_date,
        end_date=end_date
    )

    return Response({"message": "Car booked successfully!"}, status=status.HTTP_201_CREATED)

class LocationListCreateView(generics.ListCreateAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    

class CarListCreateView(generics.ListCreateAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

class CustomerListCreateView(generics.ListCreateAPIView):
    serializer_class = CustomerSerializer
    def get_queryset(self):
        return Customer.objects.filter(user=self.request.user, user__is_active=True)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class BookingListCreateView(generics.ListCreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

class ReviewListCreateView(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class InsuranceListCreateView(generics.ListCreateAPIView):
    queryset = Insurance.objects.all()
    serializer_class = InsuranceSerializer

class MaintenanceListCreateView(generics.ListCreateAPIView):
    queryset = Maintenance.objects.all()
    serializer_class = MaintenanceSerializer

class PaymentListCreateView(generics.ListCreateAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
