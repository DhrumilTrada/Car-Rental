from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import CarViewSet, CustomerViewSet, BookingViewSet, PaymentViewSet, ReviewViewSet, InsuranceViewSet, MaintenanceViewSet, LocationViewSet, create_car

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'cars', CarViewSet)
router.register(r'customers', CustomerViewSet)
router.register(r'bookings', BookingViewSet)
router.register(r'payments', PaymentViewSet)
router.register(r'reviews', ReviewViewSet)
router.register(r'insurances', InsuranceViewSet)
router.register(r'maintenances', MaintenanceViewSet)
router.register(r'locations', LocationViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('create/', create_car)
]
