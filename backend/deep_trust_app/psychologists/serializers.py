from rest_framework import serializers

from deep_trust_app.psychologists.models import Psychologist
from deep_trust_app.users.serializer import UserSerializer


class PsychologistSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Psychologist
        fields = '__all__'
