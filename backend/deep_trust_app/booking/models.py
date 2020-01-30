from django.db import models

# Create your models here.
from deep_trust_app.psychologists.models import Psychologist
from deep_trust_app.settings import AUTH_USER_MODEL


class Booking(models.Model):
    user = models.ForeignKey(
        verbose_name='Patient',
        to=AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='booking'
    )

    psychologist = models.ForeignKey(
        verbose_name='Psychologist',
        to=Psychologist,
        on_delete=models.CASCADE,
        related_name='booking_doctor'
    )

    date = models.DateField(
        verbose_name='date'
    )

    time = models.SmallIntegerField(
        choices=((1, "8:00 - 9:30"),
                 (2, "9:30 - 11:00"),
                 (3, "11:00 - 12:30"),
                 (4, "13:30 - 15:00"),
                 (5, "15:00 - 16:30"),
                 (6, "16:30 - 18:00"),
                 (7, "18:00 - 19:30"))
    )

    visited = models.BooleanField(
        verbose_name='visited',
        default=False
    )

    def __str__(self):
        return f'{self.user} - {self.psychologist} - {self.date} - {self.time} - {self.visited}'