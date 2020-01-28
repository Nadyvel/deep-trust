# creates patient card
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

# creates patient card
from rest_framework.permissions import IsAuthenticated

from deep_trust_app.patient_card.models import Patient
from deep_trust_app.patient_card.permissions import IsOwnerOfPatientCardOrReadOnly
from deep_trust_app.patient_card.serializers import PatientSerializer


# creates patient card and lists it
class CreatePatientCard(ListCreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    permission_classes = [IsOwnerOfPatientCardOrReadOnly]

    def perform_create(self, serializer):
        patient_card = Patient(user=self.request.user, **serializer.validated_data)  # smth is with this user=self.request.user
        patient_card.save()


# updates or deletes the patient card
class GetDeleteUpdatePatientCard(RetrieveUpdateDestroyAPIView):
    serializer_class = PatientSerializer
    queryset = Patient.objects.all()
    lookup_url_kwarg = 'patient_id'                                                # smth is with 'patient_id'
    permission_classes = [IsAuthenticated, IsOwnerOfPatientCardOrReadOnly]


