from rest_framework import serializers
from .models import Location, Car, Customer, Booking, Review, Insurance, Maintenance, Payment

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'
        
class LocationNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['name', 'id']

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'

class BookingSerializer(serializers.ModelSerializer):
    pickup_location = serializers.ReadOnlyField()

    class Meta:
        model = Booking
        fields = '__all__'

    def get_pickup_location(self, obj):
        return obj.car.pickup_location.name

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

class InsuranceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Insurance
        fields = '__all__'

class MaintenanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Maintenance
        fields = '__all__'

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'
