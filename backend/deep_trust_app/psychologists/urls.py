from django.urls import path

from deep_trust_app.psychologists.views import CreatePsychologist, ListPsychologists, GetDeleteUpdatePsychologist, \
    GetPatientsOfOnePsychologist

urlpatterns = [

    path('', CreatePsychologist.as_view()),
    path('new/', ListPsychologists.as_view()),
    path('<int:id>/', GetDeleteUpdatePsychologist.as_view()),
    path('patients/<int:patient_id>/', GetPatientsOfOnePsychologist.as_view()),
]
