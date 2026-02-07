from django.shortcuts import render
from myapp import models


# Create your views here.
def home(request):
    return render(request, 'home.html')
def about(request):
    return render(request, 'about.html')
def register(request):
    # Handle registration logic here
    if request.method == 'POST':
        
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
       
        models.User.objects.create(
            username=username, 
            email=email, 
            password=password)
        return render(request, 'login.html')

    return render(request, 'register.html')

def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        try:
            user = models.User.objects.get(username=username, password=password)
            return render(request, 'home.html', {'user': user})
        except models.User.DoesNotExist:
            return render(request, 'login.html', {'error': 'Invalid credentials'})
    return render(request, 'login.html')
def logout(request):
    return render(request, 'logout.html')
