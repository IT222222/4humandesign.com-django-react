# Generated by Django 3.1.3 on 2020-11-22 17:03

import ckeditor.fields
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120)),
                ('Author', models.CharField(max_length=120)),
                ('Image', models.ImageField(max_length=255, upload_to='images/')),
                ('text', ckeditor.fields.RichTextField(blank=True, null=True)),
                ('created_on', models.DateField(default=django.utils.timezone.now)),
                ('update_on', models.DateField(blank=True, default=django.utils.timezone.now, null=True)),
            ],
        ),
    ]
