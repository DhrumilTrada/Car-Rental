# Generated by Django 5.1 on 2024-08-30 13:09

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("cars", "0002_remove_booking_drop_date_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="booking",
            name="end_date",
            field=models.DateTimeField(default=datetime.datetime(2024, 8, 4, 0, 0)),
        ),
    ]
