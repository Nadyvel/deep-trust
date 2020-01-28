# Create your models here.
from django.db import models

from deep_trust_app.settings import AUTH_USER_MODEL


class Psychologist(models.Model):

    user = models.ForeignKey(
        verbose_name='Psychologist profile',
        on_delete=models.CASCADE,
        to=AUTH_USER_MODEL,
        related_name='psychologists'
    )

    first_name = models.CharField(
        verbose_name='first name',
        max_length=50,
    )

    last_name = models.CharField(
        verbose_name='last name',
        max_length=50,
    )

    country = models.CharField(
        verbose_name='select country',
        max_length=50,

    )

    city = models.CharField(
        verbose_name='psychologist city',
        max_length=50,
    )

    zip = models.CharField(
        verbose_name='psychologist_zip',
        max_length=10,
        blank=True,
    )

    working_hours = models.CharField(
        verbose_name='working_hours',
        max_length=50,
    )

    price_per_hour = models.IntegerField(
        verbose_name='psychologist prise per hour',
    )

    # @property
    # def average_rating(self):
    #     reviews = self.reviews.all()
    #     if reviews:
    #         avg = sum(review.rating for review in reviews) / len(reviews)
    #         return avg
    #     return 0

    modified = models.DateTimeField(
        verbose_name='date_modified',
        auto_now=True,
    )

    image = models.ImageField(
        verbose_name='restaurant_image',
        blank=True
    )

    timestamp = models.DateTimeField(
        verbose_name='timestamp',
        auto_now_add=True  # adds date and time automatically to the restaurant.
    )

    def __str__(self):
        return f'{self.user}'
