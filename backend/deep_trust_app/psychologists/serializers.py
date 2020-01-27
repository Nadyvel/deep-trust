from rest_framework import serializers
# from users.serializers import UserSerializer
from deep_trust_app import psychologists
from deep_trust_app.psychologists.models import Psychologist


class PsychologistSerializer (serializers.ModelSerializer):

    total_ratings = serializers.SerializerMethodField()  # searches for a function which is called get_total_ratings and executes it

    def get_total_ratings(self, restaurant):
        return psychologists.reviews.count()   # gives all the relations and the amount of ratings for the psychologist

    class Meta:
        model = Psychologist
        fields = ['id', 'total_ratings', 'average_rating', 'price_per_hour', 'working_hours', 'city',
                  'image', 'first_name', 'last_name', 'zip', 'modified']
        read_only_fields = ['id', 'total_ratings']
