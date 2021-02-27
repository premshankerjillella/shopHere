from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, filters
from .models import *
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User, auth
import json
# Create your views here.


def index(request):
    return HttpResponse("This is nice")

@csrf_exempt
def register(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data['username']
        email = data['email']
        password = data['password']
        if User.objects.filter(username=username).exists():
            return HttpResponse("User Already Exists...", status=409)
        elif User.objects.filter(email=email).exists():
            return HttpResponse("Email Already Exists...", status=409)
        else:
            user = User.objects.create_user(username=username, password=password, email=email)
            user.save()
            return HttpResponse("User created successfully...", status=200)


class DepartmentViewset(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


class ProviderViewset(viewsets.ModelViewSet):
    queryset = Provider.objects.all()
    serializer_class = ProviderSerializer


class ProductViewset(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'provider__provider_name']

    def get_queryset(self):

        queryset = Product.objects.all()
        featured = self.request.query_params.get('featured', None)
        department = self.request.query_params.get('department', None)
        searchitem = self.request.query_params.get('searchitem', None)
        if featured is not None:
            queryset = queryset.filter(featured=True)
        if department is not None:
            result = Department.objects.filter(department_name=department)
            if len(result) > 0:
                queryset = queryset.filter(department=result[0].id)
        # if searchitem is not None:
        #     queryset = queryset.filter(provider__provider_name__icontains=searchitem)
        return queryset



