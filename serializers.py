from rest_framework import serializers
from HotelApp.models import Employees, HotelGuests, Departments,Reservations,Rooms, Payments


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Employees 
        fields=('EmployeeId','EmployeeName','DepartmentName', 'SSN')

class HotelGuestSerializer(serializers.ModelSerializer):
    class Meta:
        model=HotelGuests
        fields=('GuestId', 'GuestName', 'GuestEmailAddr', 'GuestAddr') 

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Departments 
        fields=('DepartmentId','DepartmentName', 'NumOFEmployees', 'EmployeeName')

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Reservations
        fields=('ReservationID', 'ReservationEmailAddr') 

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model=Rooms
        fields=('RoomNum', 'BedNum', 'RoomsType')

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Payments
        fields=('PaymentID', 'PaymentType', 'ReservationID') 

