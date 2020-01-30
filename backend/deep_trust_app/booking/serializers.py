from rest_framework import serializers
from django.core.exceptions import ValidationError
from rest_framework.validators import UniqueTogetherValidator

from deep_trust_app.booking.models import Booking
from deep_trust_app.psychologists.serializers import PsychologistSerializer
from deep_trust_app.users.serializer import UserSerializer


def time_is_not_available(time):
    try:
        Booking.objects.get(time=time)
        raise ValidationError(message='this time is already taken')
    except Booking.DoesNotExist:
        return time


class BookingSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Booking
        fields = '__all__'
        """
        https://www.django-rest-framework.org/api-guide/validators/
        infos about unique validators in the link.
        """
        validators = [
            UniqueTogetherValidator(
                queryset=Booking.objects.all(),
                fields=['psychologist', 'date', 'time']
            )]
