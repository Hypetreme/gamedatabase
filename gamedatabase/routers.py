from rest_framework import routers
from games.viewsets import GamesViewSet
router = routers.DefaultRouter()
router.register(r'games', GamesViewSet)