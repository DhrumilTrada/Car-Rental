from django.contrib import admin
from .models import Location, Car, Customer, Booking, Review, Payment

@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = ('name', 'address', 'contact_number')

@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    list_display = ('id', 'brand', 'model', 'year', 'mileage', 'price_per_day', 'type', 'fuel_type', 'transmission', 'pickup_location', 'image')
    list_filter = ('type', 'fuel_type', 'transmission', 'is_Available')
    search_fields = ('brand', 'model')

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'phone_number', 'address', 'driving_license_number', 'license_expiry_date')
    search_fields = ('user__username', 'phone_number')

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('customer', 'car', 'pickup_date', 'total_price', 'status', 'end_date')
    list_filter = ('status', )
    search_fields = ('customer__user__username', 'car__model')

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('customer', 'car', 'rating', 'created_at')
    list_filter = ('rating',)
    search_fields = ('customer__user__username', 'car__model')

@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ('booking', 'amount_paid', 'payment_date', 'payment_method')
    list_filter = ('payment_method',)
    search_fields = ('booking__id', 'payment_method')
