from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from deep_trust_app.users.models import User


@admin.register(User)
class UserAdmin(UserAdmin):
    readonly_fields = ('date_joined',)
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'password1', 'password2')}
         ),
    )
    fieldsets = (
        (None, {'fields': ('email', 'username', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
        ('Groups', {'fields': ('groups',)}),
        ('Social', {'fields': ('location',)}),
    )
    list_display = ('email', 'first_name', 'last_name', 'is_staff')
    ordering = ('email',)
