from django.db import models
from django.conf import settings

class Car(models.Model):
    # Choices for the 'type' field
    TYPE_CHOICES = [
        ('SUV', 'SUV'),
        ('Sedan', 'Sedan'),
        ('Hatchback', 'Hatchback'),
        ('Coupe', 'Coupe'),
        ('Convertible', 'Convertible'),
    ]

    # Choices for the 'fuel_type' field
    FUEL_CHOICES = [
        ('Petrol', 'Petrol'),
        ('Diesel', 'Diesel'),
        ('Electric', 'Electric'),
        ('Hybrid', 'Hybrid'),
    ]

    # Choices for the 'transmission' field
    TRANSMISSION_CHOICES = [
        ('Automatic', 'Automatic'),
        ('Manual', 'Manual'),
    ]

    name = models.CharField(max_length=100)
    brand = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    type = models.CharField(max_length=50, choices=TYPE_CHOICES)
    year = models.IntegerField()
    price_per_day = models.DecimalField(max_digits=10, decimal_places=2)
    kilometers_driven = models.IntegerField()
    fuel_type = models.CharField(max_length=50, choices=FUEL_CHOICES)
    transmission = models.CharField(max_length=50, choices=TRANSMISSION_CHOICES)
    image = models.ImageField(upload_to='cars/', null=True, blank=True)
    availability_status = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        db_table = 'car'

    def __str__(self):
        return f"{self.brand} {self.model} ({self.year})"

class Customer(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=15)
    address = models.TextField()
    driving_license_number = models.CharField(max_length=50)
    license_expiry_date = models.DateField()

    class Meta:
        db_table = 'customer'

    def __str__(self):
        return self.user.email

from django.db import models

class Booking(models.Model):
    customer = models.ForeignKey('Customer', on_delete=models.CASCADE)
    car = models.ForeignKey('Car', on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    
    BOOKING_STATUS_CHOICES = [
        ('Confirmed', 'Confirmed'),
        ('Cancelled', 'Cancelled'),
        ('Completed', 'Completed'),
    ]
    booking_status = models.CharField(max_length=50, choices=BOOKING_STATUS_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'booking'

    def __str__(self):
        return f"Booking {self.id} - {self.car.name} by {self.customer.user.email}"

from django.db import models

class Payment(models.Model):
    booking = models.OneToOneField('Booking', on_delete=models.CASCADE)
    payment_date = models.DateTimeField(auto_now_add=True)
    
    PAYMENT_METHOD_CHOICES = [
        ('Credit Card', 'Credit Card'),
        ('PayPal', 'PayPal'),
        ('Bank Transfer', 'Bank Transfer'),
    ]
    payment_method = models.CharField(max_length=50, choices=PAYMENT_METHOD_CHOICES)
    amount_paid = models.DecimalField(max_digits=10, decimal_places=2)
    
    PAYMENT_STATUS_CHOICES = [
        ('Success', 'Success'),
        ('Failed', 'Failed'),
        ('Pending', 'Pending'),
    ]
    payment_status = models.CharField(max_length=50, choices=PAYMENT_STATUS_CHOICES)

    class Meta:
        db_table = 'payment'

    def __str__(self):
        return f"Payment for Booking {self.booking.id}"

from django.db import models

class Review(models.Model):
    car = models.ForeignKey('Car', on_delete=models.CASCADE)
    customer = models.ForeignKey('Customer', on_delete=models.CASCADE)
    rating = models.IntegerField()  # 1 to 5 stars
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'review'

    def __str__(self):
        return f"Review by {self.customer.user.email} for {self.car.name}"

from django.db import models

class Insurance(models.Model):
    car = models.OneToOneField('Car', on_delete=models.CASCADE)
    insurance_company = models.CharField(max_length=100)
    policy_number = models.CharField(max_length=100)
    coverage_amount = models.DecimalField(max_digits=15, decimal_places=2)
    start_date = models.DateField()
    end_date = models.DateField()

    class Meta:
        db_table = 'insurance'

    def __str__(self):
        return f"Insurance for {self.car.name} by {self.insurance_company}"
from django.db import models

class Maintenance(models.Model):
    car = models.ForeignKey('Car', on_delete=models.CASCADE)
    service_type = models.CharField(max_length=100)  # e.g., Oil Change, Tire Rotation
    service_date = models.DateField()
    service_cost = models.DecimalField(max_digits=10, decimal_places=2)
    notes = models.TextField(null=True, blank=True)

    class Meta:
        db_table = 'maintenance'

    def __str__(self):
        return f"Maintenance {self.service_type} for {self.car.name}"

from django.db import models

class Location(models.Model):
    name = models.CharField(max_length=100)
    address = models.TextField()
    contact_number = models.CharField(max_length=15)

    class Meta:
        db_table = 'location'

    def __str__(self):
        return self.name
