
import imp
from django.contrib import admin
from django.urls import path
from django.shortcuts import render

def Portfolio(request):
    return render(request, 'index.html')


urlpatterns = [
 
    path('', Portfolio)
]
