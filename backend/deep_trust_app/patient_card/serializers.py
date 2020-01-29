from rest_framework import serializers

from deep_trust_app.patient_card.models import Patient
from deep_trust_app.psychologists.serializers import PsychologistSerializer
from deep_trust_app.users.serializer import UserSerializer


class PatientSerializer(serializers.ModelSerializer):

    user = UserSerializer(read_only=True)

    class Meta:
        model = Patient
        fields = '__all__'
