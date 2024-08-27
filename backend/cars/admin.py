from django.contrib import admin
from .models import Car, Customer, Booking, Payment, Review, Insurance, Maintenance, Location

@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    list_display = ('name', 'brand', 'model', 'type', 'year', 'price_per_day', 'availability_status')
    search_fields = ('name', 'brand', 'model')
    list_filter = ('type', 'fuel_type', 'transmission', 'availability_status')

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ('user', 'phone_number', 'driving_license_number', 'license_expiry_date')
    search_fields = ('user__username', 'driving_license_number')
    list_filter = ('license_expiry_date',)

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('customer', 'car', 'start_date', 'end_date', 'total_amount', 'booking_status')
    search_fields = ('customer__user__username', 'car__name')
    list_filter = ('booking_status', 'start_date', 'end_date')

@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ('booking', 'payment_date', 'payment_method', 'amount_paid', 'payment_status')
    search_fields = ('booking__car__name', 'booking__customer__user__username')
    list_filter = ('payment_status', 'payment_method', 'payment_date')

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('car', 'customer', 'rating', 'created_at')
    search_fields = ('car__name', 'customer__user__username')
    list_filter = ('rating', 'created_at')

@admin.register(Insurance)
class InsuranceAdmin(admin.ModelAdmin):
    list_display = ('car', 'insurance_company', 'policy_number', 'start_date', 'end_date', 'coverage_amount')
    search_fields = ('car__name', 'insurance_company', 'policy_number')
    list_filter = ('start_date', 'end_date')

@admin.register(Maintenance)
class MaintenanceAdmin(admin.ModelAdmin):
    list_display = ('car', 'service_type', 'service_date', 'service_cost')
    search_fields = ('car__name', 'service_type')
    list_filter = ('service_date',)

@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = ('name', 'address', 'contact_number')
    search_fields = ('name', 'address')
