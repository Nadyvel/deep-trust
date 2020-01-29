# creates patient card
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView

# creates patient card
from rest_framework.permissions import IsAuthenticated

from deep_trust_app.patient_card.models import Patient
from deep_trust_app.patient_card.permissions import IsOwnerOfPatientCardOrReadOnly, PatientCardOnlyPsychologist
from deep_trust_app.patient_card.serializers import PatientSerializer


class CreatePatientCard(CreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    permission_classes = [PatientCardOnlyPsychologist]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ListPatientCard(ListAPIView):
    serializer_class = PatientSerializer
    permission_classes = [PatientCardOnlyPsychologist]
    queryset = Patient.objects.all()

    def get_queryset(self):
        query_result = Patient.objects.filter(user_id=self.request.user.id)
        return query_result


# updates or deletes the patient card
class GetDeleteUpdatePatientCard(RetrieveUpdateDestroyAPIView):
    serializer_class = PatientSerializer
    queryset = Patient.objects.all()
    lookup_url_kwarg = 'patient_id'   # smth is with 'patient_id'
    permission_classes = [IsAuthenticated, IsOwnerOfPatientCardOrReadOnly]

