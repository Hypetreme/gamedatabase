# Generated by Django 2.2.6 on 2019-10-09 09:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='games',
            options={'verbose_name_plural': 'Games'},
        ),
        migrations.AlterModelOptions(
            name='platforms',
            options={'verbose_name_plural': 'Platforms'},
        ),
        migrations.AlterField(
            model_name='games',
            name='developer',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='games',
            name='photo',
            field=models.ImageField(blank=True, upload_to='covers'),
        ),
    ]