from django.db import models

# Create your models here.
class Pokemon(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254, unique=True)
    favourties = models.CharField(max_length=5000, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)