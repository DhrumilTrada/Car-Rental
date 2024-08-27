from rest_framework import serializers
from .models import Car, Customer, Booking, Payment, Review, Insurance, Maintenance, Location

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ['id', 'name', 'brand', 'model', 'type', 'year', 'price_per_day', 'kilometers_driven', 'fuel_type', 'transmission', 'image', 'availability_status', 'created_at', 'updated_at']

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'user', 'phone_number', 'address', 'driving_license_number', 'license_expiry_date']

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['id', 'customer', 'car', 'start_date', 'end_date', 'total_amount', 'booking_status', 'created_at']

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['id', 'booking', 'payment_date', 'payment_method', 'amount_paid', 'payment_status']

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'car', 'customer', 'rating', 'comment', 'created_at']

class InsuranceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Insurance
        fields = ['id', 'car', 'insurance_company', 'policy_number', 'coverage_amount', 'start_date', 'end_date']

class MaintenanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Maintenance
        fields = ['id', 'car', 'service_type', 'service_date', 'service_cost', 'notes']

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['id', 'name', 'address', 'contact_number']
