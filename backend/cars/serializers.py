from rest_framework import serializers
from .models import Location, Car, Customer, Booking, Review, Insurance, Maintenance, Payment

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'
        
class LocationNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['name']

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'

class BookingSerializer(serializers.ModelSerializer):
    pickup_location = serializers.SerializerMethodField()

    class Meta:
        model = Booking
        fields = '__all__'

    def get_pickup_location(self, obj):
        return obj.car.pickup_location.name

    def create(self, validated_data):
        car = validated_data['car']
        car.is_Available = False
        car.save()
        validated_data['pickup_location'] = car.pickup_location
        return super().create(validated_data)

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
