from django.urls import path
from . import views

urlpatterns = [
    path('locations/', views.LocationListCreateView.as_view(), name='location-list-create'),
    path('cars/', views.CarListCreateView.as_view(), name='car-list-create'),
    path('bookings/', views.BookingListCreateView.as_view(), name='booking-list-create'),
    path('reviews/', views.ReviewListCreateView.as_view(), name='review-list-create'),
    path('payments/', views.PaymentListCreateView.as_view(), name='payment-list-create'),
    path('view-locations/', views.view_locations),
    path('get-car/', views.get_car),
    path('available-cars/', views.available_cars, name='available_cars'),
    path('view-bookings', views.view_bookings),
    path('user-details/', views.get_user_details),
    path('customer-booking/', views.customer_booking),
    path('customer-booking-create/', views.check_or_create_customer_and_book, name='customer-list-create')
]