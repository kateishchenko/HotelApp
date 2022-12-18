from django.db import models

# Create your models here.
class Employees(models.Model):
    EmployeeId = models.AutoField(primary_key=True)
    EmployeeName = models.CharField(max_length=500)
    DepartmentName = models.CharField(max_length=500)
    #DOB = models.DateField()
    SSN = models.CharField(max_length=8)
    #DateOfJoining = models.DateField()

class HotelGuests(models.Model): 
    GuestId = models.AutoField(primary_key=True)
    GuestName = models.CharField(max_length=500)
    GuestEmailAddr= models.CharField(max_length=500)
    GuestAddr = models.CharField(max_length=500)

class Departments(models.Model): 
    DepartmentId = models.AutoField(primary_key=True)
    DepartmentName = models.CharField(max_length=500)
    NumOFEmployees = models.IntegerField()
    EmployeeName = models.CharField(max_length=500)

class Reservations(models.Model): 
    ReservationID = models.AutoField(primary_key=True)
    ReservationEmailAddr = models.CharField(max_length=500)


class Rooms(models.Model): 
    RoomNum = models.AutoField(primary_key=True)
    BedNum = models.IntegerField()
    RoomsType = models.CharField(max_length=100)

class Payments(models.Model): 
    PaymentID = models.AutoField(primary_key=True)
    PaymentType = models.CharField(max_length=2)
    ReservationID = models.CharField(max_length=500)
