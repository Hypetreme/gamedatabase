# Generated by Django 2.2.5 on 2019-09-16 21:17

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Platforms',
            fields=[
                ('id', models.AutoField(auto_created=True,
                                        primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Games',
            fields=[
                ('id', models.AutoField(auto_created=True,
                                        primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('developer', models.CharField(blank=True, max_length=100)),
                ('year', models.PositiveIntegerField(blank=True, default=1980, validators=[
                 django.core.validators.RegexValidator(code='invalid_year', message='Provide a valid year', regex='^[0-9]{4}$')])),
                ('photo', models.ImageField(blank=True, upload_to='static/covers')),
                ('added', models.DateTimeField(auto_now=True)),
                ('platform', models.ForeignKey(
                    on_delete=django.db.models.deletion.CASCADE, to='api.Platforms')),
            ],
        ),
    ]
