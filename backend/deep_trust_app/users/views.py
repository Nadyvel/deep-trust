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


class ListAllUsers(ListAPIView):
    permission_classes = [ObjIsLoggedInUser]
    queryset = User.objects.filter(is_user=True)
    serializer_class = UserSerializer


class SearchForUsers(ListAPIView):
    permission_classes = [ObjIsLoggedInUser]
    serializer_class = UserSerializer

    def get_queryset(self):
        query_search = self.request.query_params['search']

        query_result = User.objects.filter((Q(is_user=True) & Q(first_name__iexact=query_search))
                                           | (Q(is_user=True) & Q(last_name__iexact=query_search)))
        return query_result


class RetrieveASpecificUser(RetrieveAPIView):
    permission_classes = [ObjIsLoggedInUser]
    serializer_class = UserSerializer
    queryset = User.objects.filter(is_user=True)
    lookup_url_kwarg = 'user_id'
