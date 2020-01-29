from django.db.models import Q
from rest_framework.generics import ListCreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView, UpdateAPIView
from rest_framework.permissions import IsAuthenticated

from deep_trust_app.psychologists.models import Psychologist
from deep_trust_app.psychologists.serializers import PsychologistSerializer
from deep_trust_app.users.models import User
from deep_trust_app.users.permissions import ObjIsLoggedInUser, isPsychologistTrue, ObjIsLoggedInUserDelete
from deep_trust_app.users.serializer import UserSerializer


class ListCreatePsychologistProfile(ListCreateAPIView):
    permission_classes = [isPsychologistTrue]
    queryset = Psychologist.objects.all()
    serializer_class = PsychologistSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


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


# deletes or updates psychologist
class UpdateDestroyPsychologist(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated, ObjIsLoggedInUserDelete]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_url_kwarg = 'user_id'


class UpdatePsychologistProfile(UpdateAPIView):
    permission_classes = [IsAuthenticated, ObjIsLoggedInUser]
    queryset = Psychologist.objects.all()
    serializer_class = PsychologistSerializer
    lookup_url_kwarg = 'user_id'


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
