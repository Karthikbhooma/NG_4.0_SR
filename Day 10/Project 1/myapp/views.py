from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(request):
    # return HttpResponse("Welcome to the Home Page!")
    return render (request, 'index.html')

def about(request):
    # return HttpResponse("<h1 align='center'>This is the About Page.</h1>")
    return render (request, 'about.html')

def contact(request):
    # return HttpResponse("<h1 align='center'>This is the Contact Page.</h1>")
    return render (request, 'contact.html')

def services(request):  
    # return HttpResponse("<h1 align='center'>This is the Services Page.</h1>")
    return render (request, 'services.html')