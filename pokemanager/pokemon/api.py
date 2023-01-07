from pokemon.models import Pokemon
from rest_framework import viewsets, permissions
from .serializers import PokemonSerializer

# Pokemon Viewset

class PokemonViewSet(viewsets.ModelViewSet):
    queryset = Pokemon.objects.all()

    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = PokemonSerializer

    # def get_queryset(self):
    #     return self.request.user.pokemon.all()

    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)