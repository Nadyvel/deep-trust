from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    email = models.EmailField(
        unique=True,
        verbose_name='email'
    )

    username = models.CharField(
        unique=True,
        max_length=50,
        verbose_name='username',
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

    is_active = models.BooleanField(
        verbose_name='active',
        default=True,
        help_text='Designates whether this user should be treated as active. Unselect this instead of deleting '
                  'accounts. '
    )

    is_staff = models.BooleanField(
        verbose_name='staff status',
        default=False,
        help_text='Designates whether the user can log into this site.'
    )

    date_joined = models.DateTimeField(
        verbose_name='date joined',
        auto_now_add=True
    )

    location = models.CharField(
        verbose_name='user location',
        max_length=200,
        blank=True
    )

    def __str__(self):
        return f'{self.username}'
