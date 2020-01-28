from rest_framework import serializers

from deep_trust_app.patient_card.models import Patient


class PatientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Patient
        fields = '__all__'
