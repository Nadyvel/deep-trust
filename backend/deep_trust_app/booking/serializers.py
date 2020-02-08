from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator

from deep_trust_app.booking.models import Booking
from deep_trust_app.emails.models import Email
from deep_trust_app.psychologists.models import Psychologist
from deep_trust_app.users.serializer import UserSerializer

User = get_user_model()


class BookingSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Booking
        fields = '__all__'


class BookingEmailSerializer(serializers.Serializer):
    class Meta:
        # model = Booking
        # fields = '__all__'
        """
        https://www.django-rest-framework.org/api-guide/validators/
        infos about unique validators in the link.
        """
        validators = [
            UniqueTogetherValidator(
                queryset=Booking.objects.all(),
                fields=['psychologist', 'date', 'time']
            )]

    date = serializers.DateField(label='date')
    time = serializers.IntegerField(label='time')
    psychologist = serializers.IntegerField(label='psychologist')

    def save(self, validated_data):
        date = validated_data.get('date')
        time = validated_data.get('time')
        psychologist = validated_data.get('psychologist')

        new_booking = Booking(
            date=date,
            time=time,
            visited=False,
            psychologist_id=psychologist,
            user_id=self.context['request'].user.id,
        )
        new_booking.save()
        #####

        user_data = self.context['request'].user.username
        psychologist_data = Psychologist.objects.filter(id=psychologist)

        email = Email(to=self.context['request'].user.email, subject=f'Hi {user_data}',
                      content=f'Your appointment with {psychologist_data.get().first_name} {psychologist_data.get().last_name} is confirmed.\n'
                              f'By following this link <INSERT LINK HERE> you can access virtual room for a video call during the booked time\n\n'
                              f'Booking details:\n'
                              f'Psychologist: {psychologist_data.get().first_name} {psychologist_data.get().last_name}\n'
                              f'Date: {date}\n'
                              f'Time: {Booking.time.field.choices[time - 1][1]}\n\n'
                              f'Sincerely yours,\n'
                              f'Deep Trust')
        email.save(request=self.context['request'])
        return new_booking


class PsychologistAndUserBookingSerializer(serializers.ModelSerializer):

    user = UserSerializer(read_only=True)
    psychologist_first_name = serializers.SerializerMethodField()
    psychologist_last_name = serializers.SerializerMethodField()
    time_in_str = serializers.SerializerMethodField()

    @staticmethod
    def get_psychologist_first_name(data):
        return data.psychologist.first_name

    @staticmethod
    def get_psychologist_last_name(data):
        return data.psychologist.last_name

    @staticmethod
    def get_time_in_str(data):
        return Booking.time.field.choices[data.time - 1][1]

    class Meta:
        model = Booking
        fields = ['user', 'id', 'date', 'time', 'time_in_str', 'psychologist', 'psychologist_first_name', 'psychologist_last_name', 'visited']
