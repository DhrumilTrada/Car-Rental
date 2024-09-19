from rest_framework import serializers
from .models import Location, Car, Customer, Booking, Review, Payment

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
    customer_email = serializers.EmailField(write_only=True)
    car_name = serializers.CharField(write_only=True)

    class Meta:
        model = Booking
        fields = "__all__"

    def create(self, validated_data):
        customer_email = validated_data.pop('customer_email')
        car_id = validated_data.pop('car_id')
        try:
            customer = Customer.objects.get(user__email=customer_email)
        except Customer.DoesNotExist:
            raise serializers.ValidationError({'customer_email': 'Customer with this email does not exist.'})
        try:
            car = Car.objects.get(id=car_id)
        except Car.DoesNotExist:
            raise serializers.ValidationError({'car_name': 'Car with this name does not exist.'})
        
        booking = Booking.objects.create(customer=customer, car=car, **validated_data)
        return booking

    def get_pickup_location(self, obj):
        return obj.car.pickup_location.name if obj.car.pickup_location else None


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'
