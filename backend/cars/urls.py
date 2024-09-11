from django.urls import path
from . import views

urlpatterns = [
    path('locations/', views.LocationListCreateView.as_view(), name='location-list-create'),
    path('cars/', views.CarListCreateView.as_view(), name='car-list-create'),
    path('customers/', views.CustomerListCreateView.as_view(), name='customer-list-create'),
    path('bookings/', views.BookingListCreateView.as_view(), name='booking-list-create'),
    path('reviews/', views.ReviewListCreateView.as_view(), name='review-list-create'),
    path('insurances/', views.InsuranceListCreateView.as_view(), name='insurance-list-create'),
    path('maintenances/', views.MaintenanceListCreateView.as_view(), name='maintenance-list-create'),
    path('payments/', views.PaymentListCreateView.as_view(), name='payment-list-create'),
    path('view-locations/', views.view_locations),
    path('get-car/', views.get_car),
    path('available-cars/', views.available_cars, name='available_cars'),
    path('book-car/', views.book_car, name='book_car'),
    path('view-bookings', views.view_bookings),
    path('book/', views.CreateBookingView.as_view()),
]