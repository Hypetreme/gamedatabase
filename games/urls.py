from django.urls import path

from . import views
app_name = 'games'
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:games_id>', views.detail, name='detail'),
]



