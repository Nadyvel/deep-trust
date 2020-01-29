from django.urls import path

from deep_trust_app.psychologists.views import ListCreatePsychologistProfile, SearchPsychologists, \
    UpdateDestroyPsychologist, UpdatePsychologistProfile

urlpatterns = [
    path('', ListCreatePsychologistProfile.as_view(), name='list-create-psychologist-profile'),
    path('search/', SearchPsychologists.as_view(), name='serach-psychologists'),
    path('me/<int:user_id>/', UpdateDestroyPsychologist.as_view(), name='retrieve-update-destroy-psychologist'),
    path('profile/<int:user_id>/', UpdatePsychologistProfile.as_view(), name='update-psychologist'),
]
