from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from HotelApp.models import Employees, HotelGuests, Departments, Reservations, Rooms, Payments
from HotelApp.serializers import EmployeeSerializer, HotelGuestSerializer, DepartmentSerializer, ReservationSerializer, RoomSerializer, PaymentSerializer

from django.core.files.storage import default_storage

# Create your views here.

@csrf_exempt
def employeeApi(request,id=0):
    if request.method=='GET':
        employees = Employees.objects.all()
        employees_serializer=EmployeeSerializer(employees,many=True)
        return JsonResponse(employees_serializer.data,safe=False)
    elif request.method=='POST':
        employee_data=JSONParser().parse(request)
        employees_serializer=EmployeeSerializer(data=employee_data)
        if employees_serializer.is_valid():
            employees_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        employee_data=JSONParser().parse(request)
        employee=Employees.objects.get(EmployeeId=employee_data['EmployeeId'])
        employees_serializer=EmployeeSerializer(employee,data=employee_data)
        if employees_serializer.is_valid():
            employees_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        employee=Employees.objects.get(EmployeeId=id)
        employee.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def hotelguestApi(request,id=0):
    if request.method=='GET':
        hotelguests = HotelGuests.objects.all()
        hotelguests_serializer=HotelGuestSerializer(hotelguests,many=True)
        return JsonResponse(hotelguests_serializer.data,safe=False)
    elif request.method=='POST':
        hotelguest_data=JSONParser().parse(request)
        hotelguests_serializer=HotelGuestSerializer(data=hotelguest_data)
        if hotelguests_serializer.is_valid():
            hotelguests_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        hotelguest_data=JSONParser().parse(request)
        hotelguest=HotelGuests.objects.get(GuestId=hotelguest_data['GuestId'])
        hotelguests_serializer=HotelGuestSerializer(hotelguest,data=hotelguest_data)
        if hotelguests_serializer.is_valid():
            hotelguests_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        hotelguest=HotelGuests.objects.get(GuestId=id)
        hotelguest.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def departmentApi(request,id=0):
    if request.method=='GET':
        departments = Departments.objects.all()
        departments_serializer=DepartmentSerializer(departments,many=True)
        return JsonResponse(departments_serializer.data,safe=False)
    elif request.method=='POST':
        department_data=JSONParser().parse(request)
        departments_serializer=DepartmentSerializer(data=department_data)
        if departments_serializer.is_valid():
            departments_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        department_data=JSONParser().parse(request)
        department=Departments.objects.get(DepartmentId=department_data['DepartmentId'])
        departments_serializer=DepartmentSerializer(department,data=department_data)
        if departments_serializer.is_valid():
            departments_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        department=Departments.objects.get(DepartmentId=id)
        department.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def reservationApi(request,id=0):
    if request.method=='GET':
        reservations = Reservations.objects.all()
        reservations_serializer=ReservationSerializer(reservations,many=True)
        return JsonResponse(reservations_serializer.data,safe=False)
    elif request.method=='POST':
        reservation_data=JSONParser().parse(request)
        reservations_serializer=ReservationSerializer(data=reservation_data)
        if reservations_serializer.is_valid():
            reservations_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        reservation_data=JSONParser().parse(request)
        reservation=Reservations.objects.get(ReservationID=reservation_data['ReservationID'])
        reservations_serializer=ReservationSerializer(reservation,data=reservation_data)
        if reservations_serializer.is_valid():
            reservations_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        reservation=Reservations.objects.get(ReservationID=id)
        reservation.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def roomApi(request,id=0):
    if request.method=='GET':
        rooms = Rooms.objects.all()
        rooms_serializer=RoomSerializer(rooms,many=True)
        return JsonResponse(rooms_serializer.data,safe=False)
    elif request.method=='POST':
        room_data=JSONParser().parse(request)
        rooms_serializer=RoomSerializer(data=room_data)
        if rooms_serializer.is_valid():
            rooms_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        room_data=JSONParser().parse(request)
        room=Rooms.objects.get(RoomNum=room_data['RoomNum'])
        rooms_serializer=RoomSerializer(room,data=room_data)
        if rooms_serializer.is_valid():
            rooms_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        room=Rooms.objects.get(RoomNum=id)
        room.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def paymentApi(request,id=0):
    if request.method=='GET':
        payments = Payments.objects.all()
        payments_serializer=PaymentSerializer(payments,many=True)
        return JsonResponse(payments_serializer.data,safe=False)
    elif request.method=='POST':
        payment_data=JSONParser().parse(request)
        payments_serializer=PaymentSerializer(data=payment_data)
        if payments_serializer.is_valid():
            payments_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        payment_data=JSONParser().parse(request)
        payment=Payments.objects.get(PaymentID=payment_data['PaymentID'])
        payments_serializer=PaymentSerializer(payment,data=payment_data)
        if payments_serializer.is_valid():
            payments_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        payment=Payments.objects.get(PaymentID=id)
        payment.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def SaveFile(request):
    file=request.FILES['file']
    file_name=default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)

