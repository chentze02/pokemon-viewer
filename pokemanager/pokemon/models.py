from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Pokemon(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254, unique=True)
    favourties = models.CharField(max_length=5000, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class FavPoke(models.Model):
    name = models.CharField(max_length=50)
    pokeUser = models.ManyToManyField(Pokemon, blank=False, related_name='pokeUser')
