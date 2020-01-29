from django.urls import path

from deep_trust_app.patient_card.views import CreatePatientCard, GetDeleteUpdatePatientCard

urlpatterns = [

    path('new-patient/', CreatePatientCard.as_view()),
    path('patients/', GetDeleteUpdatePatientCard.as_view()),
    path('patients/<int:patient_id>/', GetDeleteUpdatePatientCard.as_view()),

]
