from rest_framework import routers
from .api import PokemonViewSet

router = routers.DefaultRouter()
router.register('api/pokemon', PokemonViewSet, 'pokemon')

urlpatterns = router.urls