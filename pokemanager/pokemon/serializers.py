from rest_framework import serializers
from pokemon.models import Pokemon

#Pokemon Serializer 
class PokemonSerializer(serializers.ModelSerializer):
  class Meta:
    model = Pokemon 
    fields = '__all__'


class favPokeSerializer(serializers.ModelSerializer):
  class Meta:
    model = Pokemon 
    fields = '__all__'