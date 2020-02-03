from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'last_name', 'first_name', 'is_active', 'is_staff',
                  'date_joined', 'location', 'favourite_psychologist', 'is_user', 'is_psychologist']
