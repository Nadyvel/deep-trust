from django.contrib.auth import get_user_model
from rest_framework import serializers

from deep_trust_app.psychologists.models import Psychologist
from deep_trust_app.users.serializer import UserSerializer

User = get_user_model()


class PsychologistSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Psychologist
        fields = '__all__'


# ######################## RETRIEVE PSYCHOLOGIST ######################################
class PsychologistOnlySerializer(serializers.ModelSerializer):

    class Meta:
        model = Psychologist
        fields = '__all__'


class UserPsychologistSerializer(serializers.ModelSerializer):

    psychologists = PsychologistOnlySerializer(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'last_name', 'first_name', 'is_active', 'is_staff', 'psychologists',
                  'date_joined', 'location', 'is_user', 'favourite_psychologist', 'is_psychologist', 'image', 'description']
# ######################## RETRIEVE PSYCHOLOGIST ######################################
