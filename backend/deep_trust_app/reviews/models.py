from django.contrib.auth import get_user_model
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from deep_trust_app import settings
from deep_trust_app.psychologists.models import Psychologist

User = get_user_model()


class Review(models.Model):

    anonymous = models.BooleanField(
        default=True,
    )

    user = models.ForeignKey(
        verbose_name='user',
        to=settings.AUTH_USER_MODEL,
        related_name='reviews',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )

    psychologist = models.ForeignKey(
        Psychologist,
        related_name='reviews',
        on_delete=models.CASCADE,
    )

    content = models.TextField(
        verbose_name='review_content',
    )

    rating = models.IntegerField(
        verbose_name='psychologist_rating',
        validators=[MaxValueValidator(5), MinValueValidator(1)]
    )

    created = models.DateTimeField(
        verbose_name='date_created',
        auto_now_add=True,
    )

    modified = models.DateTimeField(
        verbose_name='date_modified',
        auto_now=True,
    )

    class Meta:
        verbose_name = 'Review'
        verbose_name_plural = 'Reviews'
        ordering = ['-modified']

