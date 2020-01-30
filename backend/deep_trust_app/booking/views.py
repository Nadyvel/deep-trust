from django.shortcuts import render

# Create your views here.
from rest_framework.generics import CreateAPIView, ListAPIView, UpdateAPIView, DestroyAPIView
from rest_framework.permissions import IsAuthenticated

from deep_trust_app.booking.models import Booking
from deep_trust_app.booking.permissions import BookingViewOnlyPsychologist, ListBookingsOfCurrentUser, \
    CreateBookingOnlyPatient, UpdateBookingOnlyPsychologist, DestroyBookingOnlyPatient, IsLoggedInUser
from deep_trust_app.booking.serializers import BookingSerializer


class CreateBooking(CreateAPIView):
    """
    POST:
    Patient/User creates new booking.
    """
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [CreateBookingOnlyPatient]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ListBookingOfCurrentUser(ListAPIView):
    """
    GET:
    List all bookings of the current user.
    Only accessible by the user.
    """
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [ListBookingsOfCurrentUser]

    def get_queryset(self):
        query_result = Booking.objects.filter(user=self.request.user)
        return query_result


class ListPsychologistAppointments(ListAPIView):
    """
    GET:
    List all appointments of psychologist.
    Only accessible by psychologist current logged in
    """
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [BookingViewOnlyPsychologist]

    def get_queryset(self):
        query_result = Booking.objects.filter(psychologist__user_id=self.request.user)
        return query_result


class UpdatePsychologistAppointments(UpdateAPIView):
    """
    PATCH:
    Updates the current booked dates and time. In case of patient/user request
    Only accessible for psychologists
    """
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    lookup_url_kwarg = 'booking_id'
    permission_classes = [UpdateBookingOnlyPsychologist]

    # def perform_update(self, serializer):
    #     serializer.save(Psychologist=self.request.user)


class DestroyAppointmentsByUser(DestroyAPIView):
    """
    DELETE:
    Delete a booking by patient/user for cancellation.
    To have the dates, time, psychologist open.
    Only accessible to patients/users.
    """
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    lookup_url_kwarg = 'booking_id'
    permission_classes = [DestroyBookingOnlyPatient]
