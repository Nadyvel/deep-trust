from django.contrib import admin

# Register your models here.
from deep_trust_app.emails.models import Email

admin.site.register(Email)
