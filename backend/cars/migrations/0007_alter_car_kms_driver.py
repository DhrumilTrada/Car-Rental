# Generated by Django 5.1 on 2024-09-02 15:21

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("cars", "0006_car_kms_driver"),
    ]

    operations = [
        migrations.AlterField(
            model_name="car",
            name="kms_driver",
            field=models.IntegerField(),
        ),
    ]
