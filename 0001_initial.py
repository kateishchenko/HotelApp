# Generated by Django 4.1.4 on 2022-12-13 02:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Employees",
            fields=[
                ("EmployeeId", models.AutoField(primary_key=True, serialize=False)),
                ("EmployeeName", models.CharField(max_length=500)),
                ("Department", models.CharField(max_length=500)),
                ("DateOfJoining", models.DateField()),
                ("PhotoFileName", models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name="HotelGuest",
            fields=[
                ("GuestId", models.AutoField(primary_key=True, serialize=False)),
                ("GuestName", models.CharField(max_length=500)),
                ("GuestEmailAddr", models.CharField(max_length=500)),
                ("GuestAddr", models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name="Hotels",
            fields=[
                ("HotelId", models.AutoField(primary_key=True, serialize=False)),
                ("HotelName", models.CharField(max_length=500)),
                ("HotelAddr", models.CharField(max_length=500)),
                ("HotelRoomNum", models.IntegerField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name="Payments",
            fields=[
                ("PaymentID", models.AutoField(primary_key=True, serialize=False)),
                ("PaymentType", models.CharField(max_length=2)),
                ("ReservationsID", models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name="Reservations",
            fields=[
                ("ReservationsID", models.AutoField(primary_key=True, serialize=False)),
                ("ReservationsEmailAddr", models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name="Rooms",
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
                ("RoomNum", models.IntegerField(max_length=500)),
                ("BedNum", models.IntegerField(max_length=500)),
                ("RoomsType", models.CharField(max_length=100)),
            ],
        ),
    ]
