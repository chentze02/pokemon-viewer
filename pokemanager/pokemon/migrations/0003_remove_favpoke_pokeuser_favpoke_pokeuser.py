# Generated by Django 4.1.5 on 2023-01-08 20:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pokemon', '0002_favpoke'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='favpoke',
            name='pokeUser',
        ),
        migrations.AddField(
            model_name='favpoke',
            name='pokeUser',
            field=models.ManyToManyField(to='pokemon.pokemon'),
        ),
    ]
