from django.shortcuts import render
from django.http import Http404

from .models import Games


def index(request):
    games = Games.objects.all().order_by('name')
    return render(request, 'index.html', {'games': games})
