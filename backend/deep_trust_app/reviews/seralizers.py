from rest_framework import serializers

from deep_trust_app.psychologists.serializers import PsychologistSerializer
from deep_trust_app.reviews.models import Review
from deep_trust_app.users.serializer import UserSerializer


class ReviewSerializer(serializers.ModelSerializer):

    user = UserSerializer(read_only=True)

    class Meta:
        model = Review
        fields = '__all__'
