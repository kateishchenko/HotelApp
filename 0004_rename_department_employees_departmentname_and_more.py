# Generated by Django 4.1.4 on 2022-12-13 03:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("HotelApp", "0003_departments_delete_hotels"),
    ]

    operations = [
        migrations.RenameField(
            model_name="employees", old_name="Department", new_name="DepartmentName",
        ),
        migrations.AddField(
            model_name="employees",
            name="DOB",
            field=models.DateField(default="2000-01-01"),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="employees",
            name="SSN",
            field=models.CharField(default="0000-00-00", max_length=500),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name="departments",
            name="NumOFEmployees",
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name="rooms", name="BedNum", field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name="rooms", name="RoomNum", field=models.IntegerField(),
        ),
    ]
