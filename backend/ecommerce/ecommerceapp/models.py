from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Department(models.Model):
    department_name = models.CharField(max_length=50)

    def __str__(self):
        return self.department_name


class Provider(models.Model):
    provider_name = models.CharField(max_length=100)

    def __str__(self):
        return self.provider_name


class Product(models.Model):
    title = models.CharField(max_length=50)
    provider = models.ForeignKey(Provider, related_name='products', on_delete=models.CASCADE)
    department = models.ForeignKey(Department, related_name='products', on_delete=models.CASCADE)
    cost = models.FloatField()
    image_url = models.CharField(max_length=500)
    featured = models.BooleanField(default=False)

    def __str__(self):
        return self.title