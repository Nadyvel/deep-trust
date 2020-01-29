from rest_framework import permissions


class IsOwnerOfReviewOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.user.is_superuser:
            return True
        if request.method == 'GET':
            return True
        if request.user == obj.owner:
            return True
        else:
            return False


class DeleteReviewIsCurrentUser(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        if request.user == obj.user:
            return True
        else:
            return False


class PsychologistCannotReviewPsychologist(permissions.BasePermission):

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True

        if bool(request.user and request.user.is_user):
            return True
