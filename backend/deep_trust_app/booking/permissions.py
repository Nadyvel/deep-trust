from rest_framework import permissions


class BookingViewOnlyPsychologist(permissions.BasePermission):

    def has_permission(self, request, view):
        if request.method == 'GET' and bool(request.user and request.user.is_psychologist):
            return True


class ListBookingsOfCurrentUser(permissions.BasePermission):

    def has_permission(self, request, view):
        if request.method == 'GET' and bool(request.user and request.user.is_user):
            return True


class CreateBookingOnlyPatient(permissions.BasePermission):

    def has_permission(self, request, view):
        if request.method == 'POST' and bool(request.user and request.user.is_user):
            return True


class UpdateBookingOnlyPsychologist(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.user == obj.psychologist.user:
            return True


class DestroyBookingOnlyPatient(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.user == obj.psychologist.user:
            return True


class IsLoggedInUser(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True
        # requesting user must be .
        if request.user == obj.user:
            return True
        else:
            return False
