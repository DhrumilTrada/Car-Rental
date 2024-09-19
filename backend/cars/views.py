from django.http import JsonResponse
from django.utils.dateparse import parse_date
from rest_framework.views import APIView
from rest_framework import status, generics
from rest_framework.response import Response
from django.db import transaction
from django.shortcuts import get_object_or_404
from rest_framework import serializers
from rest_framework.decorators import api_view, permission_classes
from django.utils import timezone
from users.models import User
from .models import Location, Car, Customer, Booking, Review, Payment
from rest_framework.permissions import IsAuthenticated
from .serializers import LocationSerializer, CarSerializer, CustomerSerializer, BookingSerializer, ReviewSerializer, PaymentSerializer, LocationNameSerializer

@api_view(['GET'])
def view_locations(request): # view locations with name and id using LocationNameSerializer
    if request.method == 'GET':
        locations = Location.objects.all() # model objects
        locations = LocationNameSerializer(locations, many=True) # convert model object -> dictionary
        return Response({'locations': locations.data}, status=status.HTTP_200_OK)
    
@api_view(['GET', 'POST'])
def get_car(request): # get cars by location, id or all
    if request.method == 'POST':
        pickup = request.data.get('pickup')
        location = request.data.get('location')
        if location and pickup:
            unavailable_car_ids = Booking.objects.filter(end_date__gte=pickup).values_list('car_id', flat=True)
            car = Car.objects.filter(pickup_location__name=location)
            available_cars = car.exclude(id__in=unavailable_car_ids)
            available_cars =  CarSerializer(available_cars, many=True)
            return Response({'car': available_cars.data}, status=status.HTTP_200_OK)
        elif location:
            car = Car.objects.filter(pickup_location__name=location)
            car =  CarSerializer(car, many=True)
            return Response({'car': car.data}, status=status.HTTP_200_OK)
        # else:
    if request.method == 'POST' and request.data.get('id'):
        car_id = request.data.get('id')
        print(car_id)
        car = Car.objects.get(id=car_id)
        car =  CarSerializer(car, many=False)
        return Response({'car': car.data}, status=status.HTTP_200_OK)
    if request.method == 'POST' and request.data.get('model'):
        car_model = request.data.get('model')
        car = Car.objects.filter(model=car_model)
        car =  CarSerializer(car, many=True)
        return Response({'car': car.data}, status=status.HTTP_200_OK)
    else:
        car = Car.objects.all()
        car =  CarSerializer(car, many=True)
        return Response({'car': car.data}, status=status.HTTP_200_OK)
    
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def get_user_details(request):
    user = request.user
    return Response({"first_name": user.first_name, "email": user.email, "last_name":user.last_name}, status=status.HTTP_200_OK)    
    
@api_view(['POST'])
def available_cars(request): # at a given date
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
    
@api_view(["POST"])
def customer_booking(request):
    data = request.data
    customer_email = data.get('customer_email')
    user = get_object_or_404(User, email=customer_email)
    customer = get_object_or_404(Customer, user=user)
    booking = Booking.objects.filter(customer=customer)
    booking = BookingSerializer(booking, many=True)
    return Response({"booking": booking.data}, status=status.HTTP_200_OK)
    
@api_view(['POST'])
@transaction.atomic
def create_payment_and_booking(request):
    data = request.data
    customer_email = data.get('customer_email')
    user = User.objects.get(email=customer_email)
    customer = Customer.objects.get(user=user)
    car_name = data.get('car_name')
    car = Car.objects.get(model=car_name)

    payment_method = data.get('payment_method')
    amount_paid = data.get('amount_paid')
    if not payment_method or not amount_paid:
        return JsonResponse({"error": "Payment method and amount are required."}, status=status.HTTP_400_BAD_REQUEST)

    try:
        if payment_method == 'Credit Card' and amount_paid > 0:
            payment_status = 'Success'
        else:
            return JsonResponse({"error": "Payment failed."}, status=status.HTTP_400_BAD_REQUEST)

        if payment_status == 'Success':
            booking = Booking.objects.create(
                customer=customer,
                car=car,
                pickup_date=data.get('pickup_date'),
                end_date=data.get('end_date'),
                total_price=data.get('total_price'),
                status='Confirmed'
            )

            Payment.objects.create(
                booking=booking,
                payment_method=payment_method,
                amount_paid=amount_paid,
                payment_status=payment_status
            )

            return JsonResponse({"message": "Payment successful and booking created.", "booking_id": booking.id}, status=status.HTTP_201_CREATED)

    except Exception as e:
        return JsonResponse({"error": f"An error occurred: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



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

    def perform_create(self, serializer):
        customer = self.request.user.customer
        car = serializer.validated_data.get('car')

        if not Booking.objects.filter(customer=customer, car=car, end_date__lt=timezone.now()).exists():
            raise serializers.ValidationError("You can only review cars you have previously booked.")
        
        serializer.save(customer=customer)

class PaymentListCreateView(generics.ListCreateAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
