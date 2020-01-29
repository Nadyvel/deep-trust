from rest_framework import permissions


class IsOwnerOfPatientCardOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):

        if request.method in permissions.SAFE_METHODS:
            return True
        if request.user == obj.user:
            return True
        else:
            return False


class PatientCardOnlyPsychologist(permissions.BasePermission):

    def has_permission(self, request, view):
        if bool(request.user and request.user.is_psychologist):
            return True
