from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Pokemon(models.Model):
    name = models.CharField(max_length=50, unique=True)
    image = models.CharField(max_length=500, unique=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, related_name="pokemons", on_delete=models.CASCADE, null=True)

class FavPoke(models.Model):
    name = models.CharField(max_length=50)
    pokeUser = models.ManyToManyField(Pokemon, blank=False, related_name='pokeUser')
