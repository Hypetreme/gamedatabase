from rest_framework import routers
from backend.api.viewsets import GamesViewSet
router = routers.DefaultRouter()
router.register(r'games', GamesViewSet)
