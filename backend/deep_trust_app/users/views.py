from django.db.models import Q
from rest_framework.generics import RetrieveUpdateAPIView, ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated

from deep_trust_app.users.models import User
from deep_trust_app.users.permissions import ObjIsLoggedInUser
from deep_trust_app.users.serializer import UserSerializer


class RetrieveUpdateUserProfile(RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated, ObjIsLoggedInUser]
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
