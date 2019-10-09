from rest_framework import viewsets
from .models import Games
from .serializers import GamesSerializer


class GamesViewSet(viewsets.ModelViewSet):
    queryset = Games.objects.all().order_by('name')
    serializer_class = GamesSerializer
