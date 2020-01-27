from django.urls import path

from deep_trust_app.users.views import RetrieveUpdateUserProfile, ListAllUsers, SearchForUsers, RetrieveASpecificUser

urlpatterns = [
    path('me/', RetrieveUpdateUserProfile.as_view(), name='retrieve-update-user-profile'),
    path('users/list/', ListAllUsers.as_view(), name='list-all-users'),
    path('users/', SearchForUsers.as_view(), name='search-for-users'),
    path('users/<int:user_id>/', RetrieveASpecificUser.as_view(), name='retrieve-a-specific-user'),
]