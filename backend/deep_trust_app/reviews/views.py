from rest_framework import filters, status
from rest_framework.generics import CreateAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from deep_trust_app.reviews.models import Review
from deep_trust_app.reviews.permissions import IsOwnerOfReviewOrReadOnly
from deep_trust_app.reviews.seralizers import ReviewSerializer


# creates review
class CreateReview(CreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def create(self, request, *args, **kwargs):

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = None if serializer.validated_data['anonymous'] else self.request.user
        review = Review(user=user, **serializer.validated_data)
        review.save()
        headers = self.get_success_headers(serializer.data)
        return Response(ReviewSerializer(review).data, status=status.HTTP_201_CREATED, headers=headers)


# lists reviews for one doctor
class ListReviewsForPsychologist(ListAPIView):
    permission_classes = []
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'psychologist_id'

    def get_queryset(self):
        query_result = Review.objects.filter(psychologist=self.kwargs.get('psychologist_id'))
        return query_result


# deletes or updates the review by id
class DeleteUpdateReview(RetrieveUpdateDestroyAPIView):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()
    lookup_url_kwarg = 'review_id'
    permission_classes = [IsAuthenticated, IsOwnerOfReviewOrReadOnly]


