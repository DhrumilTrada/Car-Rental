from django.utils.dateparse import parse_date
from rest_framework import status, generics
from rest_framework.response import Response
from datetime import date
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .models import Location, Car, Customer, Booking, Review, Insurance, Maintenance, Payment
from .serializers import LocationSerializer, CarSerializer, CustomerSerializer, BookingSerializer, ReviewSerializer, InsuranceSerializer, MaintenanceSerializer, PaymentSerializer, LocationNameSerializer

@api_view(['GET'])
def view_locations(request): # view locations with name and id using LocationNameSerializer
    if request.method == 'GET':
        locations = Location.objects.all() # model objects
        locations = LocationNameSerializer(locations, many=True) # convert model object -> dictionary
        return Response({'locations': locations.data}, status=status.HTTP_200_OK)
    
@api_view(['GET', 'POST'])
def get_car(request): # get cars by location, id or all
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
def available_cars(request): # at a given date
    current_date = date.today()
    print(current_date)
    date_provided = parse_date(request.data.get('pickup_date'))
    unavailable_cars = Booking.objects.filter(end_date__gte=date_provided)
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
        return Response({'bookings': bookings.data}, status=status.HTTP_200_OK)

@api_view(['POST'])
def book_car(request):
    if request.method == 'POST':
        data = request.data
        serializer = BookingSerializer(data=data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Booking created successfully!"}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
