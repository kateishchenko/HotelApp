from django.urls import re_path as url
from HotelApp import views

urlpatterns=[
    url(r'^employee$',views.employeeApi),
    url(r'^employee/([0-9]+)$',views.employeeApi),

    url(r'^hotelguest$',views.hotelguestApi),
    url(r'^hotelguest/([0-9]+)$',views.hotelguestApi),

    url(r'^department$',views.departmentApi),
    url(r'^department/([0-9]+)$',views.departmentApi),

     url(r'^reservation$',views.reservationApi),
    url(r'^reservation/([0-9]+)$',views.reservationApi),

    url(r'^room$',views.roomApi),
    url(r'^room/([0-9]+)$',views.roomApi),

    url(r'^payment$',views.paymentApi),
    url(r'^payment/([0-9]+)$',views.paymentApi)]
