from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView
from deep_trust_app.registration.views import RegistrationView, RegistrationValidationView, TokenUserObtainView, \
    PasswordResetView, \
    PasswordResetValidationView, PsychologistRegistrationView

app_name = 'registration'

urlpatterns = [
    path('token/', TokenUserObtainView.as_view(), name='retrieve-token-and-user'),
    path('token/refresh/', TokenRefreshView.as_view(), name='retrieve-refreshed-token'),
    path('token/verify/', TokenVerifyView.as_view(), name='verify-token'),
    path('registration/', RegistrationView.as_view(), name='registration'),
    path('registration/psychologist/', PsychologistRegistrationView.as_view(), name='registration'),
    path('registration/validation/', RegistrationValidationView.as_view(), name='registration-validation'),
    path('password-reset/', PasswordResetView.as_view(), name='password-reset'),
    path('password-reset/validation/', PasswordResetValidationView.as_view(), name='password-reset-validation'),
]
