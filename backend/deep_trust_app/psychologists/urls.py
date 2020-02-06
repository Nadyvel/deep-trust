from django.urls import path

from deep_trust_app.psychologists.views import CreatePsychologistProfile, SearchPsychologists, \
    DestroyPsychologist, UpdatePsychologistProfile, ListPsychologistProfile, CreateFavouritePsychologist, \
    ListAllFavouritePsychologist, RetrievePsychologistProfile

urlpatterns = [
    path('new/profile/', CreatePsychologistProfile.as_view(), name='create-psychologist-profile'),
    path('search/', SearchPsychologists.as_view(), name='serach-psychologists'),
    path('me/<int:user_id>/', DestroyPsychologist.as_view(), name='retrieve-update-destroy-psychologist'),
    path('profile/<int:user_id>/', UpdatePsychologistProfile.as_view(), name='update-psychologist'),
    path('', ListPsychologistProfile.as_view(), name='list-all-psychologist-profile'),
    path('favourite/<int:psychologist_id>/', CreateFavouritePsychologist.as_view(), name='create-favourite-psychologist'),
    path('my/favourites/', ListAllFavouritePsychologist.as_view(), name='list-all-favourite-psychologist'),
    path('my/profile/<int:user_id>/', RetrievePsychologistProfile.as_view(), name='retrieve-psychologist-profile')
]
