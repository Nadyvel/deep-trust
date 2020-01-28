from django.db import models

from deep_trust_app.psychologists.models import Psychologist


class Patient(models.Model):

    psychologist = models.ForeignKey(
        Psychologist,
        related_name='patients',
        on_delete=models.CASCADE,
    )

    email = models.EmailField(
        unique=True,
        verbose_name='email'
    )

    last_name = models.CharField(
        verbose_name='last name',
        max_length=100,
        blank=True
    )

    first_name = models.CharField(
        verbose_name='first name',
        max_length=100,
        blank=True
    )

    problem_description = models.TextField(
        verbose_name='problem description',
        blank=True,
        null=True,
    )

    special_notes = models.TextField(
        verbose_name='special notes',
        blank=True,
        null=True,
    )

    birth_date = models.DateField(
        verbose_name='birth date',
        blank=True,
        null=True,
    )

    todos = models.TextField(
        verbose_name='todos',
        blank=True,
        null=True,
    )

    # calendar = models.TextField(
    #     verbose_name='calendar',
    #     blank=True,
    #     null=True,
    # )