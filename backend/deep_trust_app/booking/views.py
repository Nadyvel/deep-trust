from django.db.models import Q
from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.generics import ListAPIView, UpdateAPIView, DestroyAPIView, GenericAPIView, RetrieveAPIView
from rest_framework.response import Response

from deep_trust_app.booking.models import Booking
from deep_trust_app.booking.permissions import BookingViewOnlyPsychologist, ListBookingsOfCurrentUser, \
    CreateBookingOnlyPatient, UpdateBookingOnlyPsychologist, DestroyBookingOnlyPatient
from deep_trust_app.booking.serializers import BookingEmailSerializer, BookingSerializer, \
    PsychologistAndUserBookingSerializer


class CreateBooking(GenericAPIView):
    """
    POST:
    Create a new booking and sends email for successful booking.
    """
    serializer_class = BookingEmailSerializer
    permission_classes = [CreateBookingOnlyPatient]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(serializer.validated_data)
        return Response(status=status.HTTP_200_OK)


class ListBookingOfCurrentUser(ListAPIView):
    """
    GET:
    List all bookings of the current user.
    Only accessible by the user.
    """
    queryset = Booking.objects.all()
    serializer_class = PsychologistAndUserBookingSerializer
    permission_classes = [ListBookingsOfCurrentUser]

    def get_queryset(self):
        query_result = Booking.objects.filter(user=self.request.user).order_by('booking_created').reverse()
        return query_result


class ListPsychologistAppointments(ListAPIView):
    """
    GET:
    List all appointments of psychologist.
    Only accessible by psychologist current logged in
    """
    queryset = Booking.objects.all()
    serializer_class = PsychologistAndUserBookingSerializer
    permission_classes = [BookingViewOnlyPsychologist]

    def get_queryset(self):
        query_result = Booking.objects.filter(psychologist__user_id=self.request.user).order_by('booking_created').reverse()
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


class ListAllBookedDatesOfPsychologist(ListAPIView):
    queryset = Booking.objects.all()
    serializer_class = PsychologistAndUserBookingSerializer
    permission_classes = []

    def filter_queryset(self, queryset):
        psychologist = self.request.query_params.get('psychologist')
        date = self.request.query_params.get('date')
        queryset = queryset.filter(psychologist_id=psychologist, date=date).order_by('date').reverse()
        return queryset
