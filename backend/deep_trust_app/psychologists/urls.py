from django.urls import path

# from deep_trust_app.psychologists.views import CreatePsychologist, ListPsychologists, GetDeleteUpdatePsychologist, \
#     GetPatientsOfOnePsychologist
from deep_trust_app.psychologists.views import ListCreatePsychologistProfile, SearchPsychologists, \
    UpdateDestroyPsychologist

urlpatterns = [
    path('', ListCreatePsychologistProfile.as_view(), name='list-create-psychologist-profile'),
    path('search/', SearchPsychologists.as_view(), name='serach-psychologists'),
    path('me/<int:user_id>/', UpdateDestroyPsychologist.as_view(), name='retrieve-update-destroy-psychologist'),

    # path('', CreatePsychologist.as_view()),
    # path('new/', ListPsychologists.as_view()),
    # path('<int:id>/', GetDeleteUpdatePsychologist.as_view()),
    # path('patients/<int:patient_id>/', GetPatientsOfOnePsychologist.as_view()),
]
