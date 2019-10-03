from rest_framework import serializers
from .models import Games

class GamesSerializer(serializers.ModelSerializer):
    platform_name = serializers.CharField(source='platform.name')
    class Meta:
        model = Games
        fields = '__all__'