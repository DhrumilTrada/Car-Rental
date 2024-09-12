# Generated by Django 5.1 on 2024-09-12 15:45

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("cars", "0013_car_kms_driven"),
    ]

    operations = [
        migrations.AddField(
            model_name="car",
            name="description",
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name="car",
            name="mileage",
            field=models.DecimalField(decimal_places=2, max_digits=2, null=True),
        ),
    ]
