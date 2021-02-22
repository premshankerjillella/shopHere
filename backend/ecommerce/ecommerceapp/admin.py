from django.contrib import admin
from .models import  Department, Provider, Product
# Register your models here.

admin.site.register(Department, admin.ModelAdmin)
admin.site.register(Provider, admin.ModelAdmin)
admin.site.register(Product, admin.ModelAdmin)
