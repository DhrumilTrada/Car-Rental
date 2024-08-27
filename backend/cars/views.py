from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from users.models import User
from users.serializers import CreateUserSerializer
from .models import Car

@api_view(['POST'])
def create_car(request):
    if request.method == 'POST':
        # name = request.data.get('name')
        # address = request.data.get('address')
        # contact_number = request.data.get('contact_number')
        email = request.data.get('email')
        # Get the User instance using the email
        try:
            print(email)
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        
        phone_number = request.data.get('phone_number')
        address = request.data.get('address')
        driving_license_number = request.data.get('driving_license_number')
        license_expiry_date = request.data.get('license_expiry_date')
        print(license_expiry_date)
        # # Directly create the Person instance in the PostgreSQL database
        Customer.objects.create(user=user, phone_number=phone_number, address=address, driving_license_number=driving_license_number, license_expiry_date=license_expiry_date)

        return Response({'message': 'Customer created successfully'}, status=status.HTTP_201_CREATED)

# @api_view(['GET'])
# def view(request):
#     if request.method == 'GET':
#         persons = Person.objects.using('postgres').all()
#         print(persons)
#         print()
#         persons = PersonSerializer(persons, many=True)
#         print(persons)
#         return Response({'persons': persons.data}, status=status.HTTP_200_OK)

from rest_framework import viewsets
from .models import Car, Customer, Booking, Payment, Review, Insurance, Maintenance, Location
from .serializers import CarSerializer, CustomerSerializer, BookingSerializer, PaymentSerializer, ReviewSerializer, InsuranceSerializer, MaintenanceSerializer, LocationSerializer

class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class InsuranceViewSet(viewsets.ModelViewSet):
    queryset = Insurance.objects.all()
    serializer_class = InsuranceSerializer

class MaintenanceViewSet(viewsets.ModelViewSet):
    queryset = Maintenance.objects.all()
    serializer_class = MaintenanceSerializer

class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
