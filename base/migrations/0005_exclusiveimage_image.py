# Generated by Django 4.0.3 on 2022-03-10 20:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_paymentsupported_socialmedia_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='exclusiveimage',
            name='image',
            field=models.ImageField(null=True, upload_to=''),
        ),
    ]
