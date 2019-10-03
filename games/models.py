from django.db import models
from django.conf import settings

from django.core.validators import RegexValidator

class Platforms(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Platforms"    

class Games(models.Model):
    name = models.CharField(max_length=100)
    platform = models.ForeignKey(Platforms, on_delete=models.CASCADE)
    developer = models.CharField(max_length=100)
    year = models.PositiveIntegerField(default=1980, blank=True, 
    validators=[
    RegexValidator(
        regex='^[0-9]{4}$',
        message='Provide a valid year',
        code='invalid_year'
    ),    
    ])
    photo= models.ImageField(upload_to='covers/', height_field=None, width_field=None, max_length=100, blank=True)
    added = models.DateTimeField(auto_now=True, auto_now_add=False)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Games"    


