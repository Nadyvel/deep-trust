from django.urls import path

from deep_trust_app.psychologists.views import CreatePsychologistProfile, SearchPsychologists, \
    UpdateDestroyPsychologist, UpdatePsychologistProfile, ListPsychologistProfile, CreateFavouritePsychologist

urlpatterns = [
    path('new/profile/', CreatePsychologistProfile.as_view(), name='create-psychologist-profile'),
    path('search/', SearchPsychologists.as_view(), name='serach-psychologists'),
    path('me/<int:user_id>/', UpdateDestroyPsychologist.as_view(), name='retrieve-update-destroy-psychologist'),
    path('profile/<int:user_id>/', UpdatePsychologistProfile.as_view(), name='update-psychologist'),
    path('', ListPsychologistProfile.as_view(), name='list-all-psychologist-profile'),
    path('favourite/<int:psychologist_id>/', CreateFavouritePsychologist.as_view(), name='create-favourite-psychologist')
]
