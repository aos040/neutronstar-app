# Generated by Django 4.0.3 on 2022-04-05 21:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0009_rename_image_productimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='creditcard',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
