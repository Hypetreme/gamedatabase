from django.contrib import admin

from .models import Games, Platforms

admin.site.site_header = "Game Database Admin"
admin.site.site_title = "Admin Area"

class GamesAdmin(admin.ModelAdmin):

    list_filter = ('platform',)
    list_display = ['name', 'platform', 'developer', 'year', 'added']
    list_display_links = ('name',)
    radio_fields = {'platform': admin.VERTICAL}

admin.site.register(Games, GamesAdmin)
admin.site.register(Platforms)
