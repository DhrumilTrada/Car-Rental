# Generated by Django 5.1 on 2024-08-27 17:11

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Car",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                ("brand", models.CharField(max_length=100)),
                ("model", models.CharField(max_length=100)),
                (
                    "type",
                    models.CharField(
                        choices=[
                            ("SUV", "SUV"),
                            ("Sedan", "Sedan"),
                            ("Hatchback", "Hatchback"),
                            ("Coupe", "Coupe"),
                            ("Convertible", "Convertible"),
                        ],
                        max_length=50,
                    ),
                ),
                ("year", models.IntegerField()),
                ("price_per_day", models.DecimalField(decimal_places=2, max_digits=10)),
                ("kilometers_driven", models.IntegerField()),
                (
                    "fuel_type",
                    models.CharField(
                        choices=[
                            ("Petrol", "Petrol"),
                            ("Diesel", "Diesel"),
                            ("Electric", "Electric"),
                            ("Hybrid", "Hybrid"),
                        ],
                        max_length=50,
                    ),
                ),
                (
                    "transmission",
                    models.CharField(
                        choices=[("Automatic", "Automatic"), ("Manual", "Manual")],
                        max_length=50,
                    ),
                ),
                ("image", models.ImageField(blank=True, null=True, upload_to="cars/")),
                ("availability_status", models.BooleanField(default=True)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
            options={
                "db_table": "car",
            },
        ),
        migrations.CreateModel(
            name="Location",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                ("address", models.TextField()),
                ("contact_number", models.CharField(max_length=15)),
            ],
            options={
                "db_table": "location",
            },
        ),
        migrations.CreateModel(
            name="Customer",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("phone_number", models.CharField(max_length=15)),
                ("address", models.TextField()),
                ("driving_license_number", models.CharField(max_length=50)),
                ("license_expiry_date", models.DateField()),
                (
                    "user",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "db_table": "customer",
            },
        ),
        migrations.CreateModel(
            name="Booking",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("start_date", models.DateField()),
                ("end_date", models.DateField()),
                ("total_amount", models.DecimalField(decimal_places=2, max_digits=10)),
                (
                    "booking_status",
                    models.CharField(
                        choices=[
                            ("Confirmed", "Confirmed"),
                            ("Cancelled", "Cancelled"),
                            ("Completed", "Completed"),
                        ],
                        max_length=50,
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                (
                    "car",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="cars.car"
                    ),
                ),
                (
                    "customer",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="cars.customer"
                    ),
                ),
            ],
            options={
                "db_table": "booking",
            },
        ),
        migrations.CreateModel(
            name="Insurance",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("insurance_company", models.CharField(max_length=100)),
                ("policy_number", models.CharField(max_length=100)),
                (
                    "coverage_amount",
                    models.DecimalField(decimal_places=2, max_digits=15),
                ),
                ("start_date", models.DateField()),
                ("end_date", models.DateField()),
                (
                    "car",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE, to="cars.car"
                    ),
                ),
            ],
            options={
                "db_table": "insurance",
            },
        ),
        migrations.CreateModel(
            name="Maintenance",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("service_type", models.CharField(max_length=100)),
                ("service_date", models.DateField()),
                ("service_cost", models.DecimalField(decimal_places=2, max_digits=10)),
                ("notes", models.TextField(blank=True, null=True)),
                (
                    "car",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="cars.car"
                    ),
                ),
            ],
            options={
                "db_table": "maintenance",
            },
        ),
        migrations.CreateModel(
            name="Payment",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("payment_date", models.DateTimeField(auto_now_add=True)),
                (
                    "payment_method",
                    models.CharField(
                        choices=[
                            ("Credit Card", "Credit Card"),
                            ("PayPal", "PayPal"),
                            ("Bank Transfer", "Bank Transfer"),
                        ],
                        max_length=50,
                    ),
                ),
                ("amount_paid", models.DecimalField(decimal_places=2, max_digits=10)),
                (
                    "payment_status",
                    models.CharField(
                        choices=[
                            ("Success", "Success"),
                            ("Failed", "Failed"),
                            ("Pending", "Pending"),
                        ],
                        max_length=50,
                    ),
                ),
                (
                    "booking",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE, to="cars.booking"
                    ),
                ),
            ],
            options={
                "db_table": "payment",
            },
        ),
        migrations.CreateModel(
            name="Review",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("rating", models.IntegerField()),
                ("comment", models.TextField()),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                (
                    "car",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="cars.car"
                    ),
                ),
                (
                    "customer",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="cars.customer"
                    ),
                ),
            ],
            options={
                "db_table": "review",
            },
        ),
    ]
