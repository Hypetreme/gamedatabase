from django.shortcuts import render
from django.http import Http404

from .models import Games

def index(request):
   games = Games.objects.all().order_by('name')
   return render(request, 'games/index.html', {'games': games})

def detail(request, games_id):
   try:
     game = Games.objects.get(pk=games_id)
   except Games.DoesNotExist:
      raise Http404("Game does not exist")
   return render(request, 'games/details.html', {'game': game })
   