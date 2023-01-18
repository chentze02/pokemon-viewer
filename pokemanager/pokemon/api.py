from pokemon.models import Pokemon, FavPoke
from rest_framework import viewsets, permissions
from .serializers import PokemonSerializer,favPokeSerializer

# Pokemon Viewset

class PokemonViewSet(viewsets.ModelViewSet):
    # queryset = Pokemon.objects.all()

    permission_classes = [
        # permissions.AllowAny
        permissions.IsAuthenticated
    ]

    serializer_class = PokemonSerializer

    def get_queryset(self):
        return self.request.user.pokemon.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class FavPokeViewSet(viewsets.ModelViewSet):
    queryset = FavPoke.objects.all()
    serializer_class = favPokeSerializer

