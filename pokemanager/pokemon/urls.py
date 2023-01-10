from rest_framework import routers
from .api import PokemonViewSet, FavPokeViewSet

router = routers.DefaultRouter()
router.register('api/pokemon', PokemonViewSet, 'pokemon')
router.register('api/favPoke', FavPokeViewSet, 'pokemon')

urlpatterns = router.urls