# Generated by Django 4.1.5 on 2023-01-15 02:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pokemon', '0004_alter_favpoke_pokeuser'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pokemon',
            name='email',
        ),
        migrations.RemoveField(
            model_name='pokemon',
            name='favourties',
        ),
        migrations.AddField(
            model_name='pokemon',
            name='image',
            field=models.CharField(max_length=500, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='pokemon',
            name='name',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]