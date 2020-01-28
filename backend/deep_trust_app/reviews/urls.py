from django.urls import path

from deep_trust_app.reviews.views import CreateReview, ListReviewsForPsychologist, DeleteUpdateReview

urlpatterns = [

    path('new/<int:psychologist_id>/', CreateReview.as_view()),
    path('psychologist/<int:psychologist_id>/', ListReviewsForPsychologist.as_view()),
    path('<int:review_id>/', DeleteUpdateReview.as_view()),

]
