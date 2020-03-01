from django.urls import path

from deep_trust_app.users.views import RetrieveUpdateUserProfile
urlpatterns = [
    path('me/', RetrieveUpdateUserProfile.as_view(), name='retrieve-update-user-profile'),
]