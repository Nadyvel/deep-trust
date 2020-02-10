from django.db.models import Q
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, UpdateAPIView, CreateAPIView, \
    GenericAPIView, DestroyAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from deep_trust_app.psychologists.models import Psychologist
from deep_trust_app.psychologists.permissions import IsUserCurrentLoggedIn
from deep_trust_app.psychologists.serializers import PsychologistSerializer, UserPsychologistSerializer
from deep_trust_app.users.models import User
from deep_trust_app.users.permissions import ObjIsLoggedInUser, isPsychologistTrue, ObjIsLoggedInUserDelete
from deep_trust_app.users.serializer import UserSerializer


class CreatePsychologistProfile(CreateAPIView):
    permission_classes = [isPsychologistTrue]
    queryset = Psychologist.objects.all()
    serializer_class = PsychologistSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ListPsychologistProfile(ListAPIView):
    permission_classes = []
    queryset = Psychologist.objects.all()
    serializer_class = PsychologistSerializer


# gets a list of the psychologists and searches for a particular one by string
class SearchPsychologists(ListAPIView):
    permission_classes = []
    serializer_class = PsychologistSerializer
    queryset = Psychologist.objects.all()

    def filter_queryset(self, queryset):
        search = self.request.query_params.get('search')
        if search:
            queryset = queryset.filter(Q(first_name__icontains=search) |
                                       Q(last_name__icontains=search) |
                                       Q(country__icontains=search) |
                                       Q(city__icontains=search))
        return queryset


class RetrievePsychologistProfile(RetrieveAPIView):
    permission_classes = [IsAuthenticated, ObjIsLoggedInUser]
    queryset = User.objects.all()
    serializer_class = UserPsychologistSerializer

    def get_object(self):
        return self.request.user
    # def retrieve(self, request, *args, **kwargs):
    #     instance = self.request.user
    #     serializer = self.get_serializer(instance)
    #     return Response(serializer.data)


# deletes or updates psychologist
class DestroyPsychologist(DestroyAPIView):
    permission_classes = [IsAuthenticated, ObjIsLoggedInUserDelete]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_url_kwarg = 'user_id'


class UpdatePsychologistProfile(UpdateAPIView):
    permission_classes = [IsAuthenticated, ObjIsLoggedInUser]
    queryset = Psychologist.objects.all()
    serializer_class = PsychologistSerializer
    lookup_url_kwarg = 'user_id'


class CreateFavouritePsychologist(GenericAPIView):
    """
    POST: favourite a psychologist
    """
    permission_classes = [IsAuthenticated, IsUserCurrentLoggedIn]
    serializer_class = PsychologistSerializer
    queryset = Psychologist.objects.all()
    lookup_url_kwarg = 'psychologist_id'

    def post(self, request, psychologist_id):
        post_to_save = self.get_object()
        user = request.user
        if post_to_save in user.favourite_psychologist.all():
            user.favourite_psychologist.remove(post_to_save)
            return Response(self.get_serializer(instance=post_to_save).data)
        user.favourite_psychologist.add(post_to_save)
        return Response(self.get_serializer(instance=post_to_save).data)


class ListAllFavouritePsychologist(ListAPIView):
    permission_classes = [IsUserCurrentLoggedIn]
    queryset = Psychologist.objects.all()
    serializer_class = PsychologistSerializer

    def get_queryset(self):
        query_result = Psychologist.objects.filter(favourite_by=self.request.user)
        return query_result


# # get all patients from one psychologist     this code gets read, not executed. Only def method gets executed
# class GetPatientsOfOnePsychologist(ListAPIView):
#     serializer_class = UserSerializer
#     lookup_url_kwarg = 'psychologist_id'
#     filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
#
#     def get_queryset(self):
#         psychologist_id = self.kwargs['psychologist_id']
#         psychologist = Psychologist.objects.get(id=psychologist_id)
#         users = psychologist.users.all().order_by('timestamp').reverse()
#
#         return users


# class ListBestRatedPsychologists(GenericAPIView):
#     permission_classes = []
#     serializer_class = PsychologistSerializer
#
#     def get(self, request, **kwargs):
#         queryset = Psychologist.objects.all()
#         response = sorted(queryset, key=lambda psychologist: psychologist.average_rating, reverse=True)[:4]
#         serializer = self.get_serializer(response, many=True)
#         return Response(serializer.data)
