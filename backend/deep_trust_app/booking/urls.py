from django.urls import path

from deep_trust_app.booking.views import CreateBooking, ListPsychologistAppointments, ListBookingOfCurrentUser, \
    UpdatePsychologistAppointments, DestroyAppointmentsByUser, ListAllBookedDatesOfPsychologist

urlpatterns = [
    path('me/', CreateBooking.as_view(), name='create-booking'),
    path('psychologist/', ListPsychologistAppointments.as_view(), name='list-psychologist-appointments'),
    path('mybookings/', ListBookingOfCurrentUser.as_view(), name='list-bookings-of-current-user'),
    path('update/<int:booking_id>/', UpdatePsychologistAppointments.as_view(), name='update-psychologist-appointments'),
    path('destroy/<int:booking_id>/', DestroyAppointmentsByUser.as_view(), name='destroy-appointments-by-user'),
    path('retrieve/<int:psychologist_id>/', ListAllBookedDatesOfPsychologist.as_view(), name='list-all-booked-dates-of-psychologist')
]
