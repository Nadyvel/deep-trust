from rest_framework.generics import ListCreateAPIView

from deep_trust_app.psychologists.models import Psychologist
from deep_trust_app.psychologists.permissions import IsOwnerOfProfileOrReadOnly
from deep_trust_app.psychologists.serializers import PsychologistSerializer


class ListCreatePsychologistProfile(ListCreateAPIView):
    permission_classes = [IsOwnerOfProfileOrReadOnly]
    queryset = Psychologist.objects.all()
    serializer_class = PsychologistSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


# import django_filters
# from django.contrib.auth import get_user_model
#
# from django.db.models import Q
#
#
# # Create your views here.
#
# from rest_framework import status
# from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, \
#     GenericAPIView
# from rest_framework.permissions import IsAuthenticated
# from rest_framework.response import Response
#
# from deep_trust_app.psychologists.models import Psychologist
# from deep_trust_app.psychologists.permissions import IsOwnerOfProfileOrReadOnly
# from deep_trust_app.psychologists.serializers import PsychologistSerializer
# from deep_trust_app.users.serializer import UserSerializer
#
# User = get_user_model()
#
#
# # create psychlogist
# class CreatePsychologist(CreateAPIView):
#     queryset = Psychologist.objects.all()
#     serializer_class = PsychologistSerializer
#
#     def perform_create(self, serializer):
#         psychologist = Psychologist(psychlogist=self.request.psychlogist, **serializer.validated_data)
#         psychologist.save()
#
#
# # gets a list of the psychologists and searches for a particular one by string
# class ListPsychologists(ListAPIView):
#     serializer_class = PsychologistSerializer
#     queryset = Psychologist.objects.all()
#
#     def filter_queryset(self, queryset):
#         search = self.request.query_params.get('search')
#         if search:
#             queryset = queryset.filter(Q(first_name__icontains=search) |
#                                        Q(last_name__icontains=search) |
#                                        Q(country__icontains=search) |
#                                        Q(city__icontains=search))
#         return queryset
#
#
# # deletes or updates psychologist by id
# class GetDeleteUpdatePsychologist(RetrieveUpdateDestroyAPIView):
#     serializer_class = PsychologistSerializer
#     queryset = Psychologist.objects.all()
#     lookup_url_kwarg = 'psychologist_id'
#     permission_classes = [IsAuthenticated, IsOwnerOfProfileOrReadOnly]
#
#
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
