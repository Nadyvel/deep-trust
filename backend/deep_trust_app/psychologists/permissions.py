from rest_framework import permissions


class IsOwnerOfProfileOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.user.is_superuser:
            return True
        if request.method == 'GET':
            return True
        if (request.user == obj.owner and
                request.user.is_psychologist == True):
            return True
        else:
            return False
