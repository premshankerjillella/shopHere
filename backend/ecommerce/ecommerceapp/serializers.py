from rest_framework import  serializers
from .models import Provider, Department, Product


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['id', 'department_name']


class ProviderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Provider
        fields = ['id', 'provider_name']


class ProductSerializer(serializers.ModelSerializer):
    department = DepartmentSerializer()
    provider = ProviderSerializer()

    class Meta:
        model = Product
        fields = ['id', 'featured', 'title', 'cost', 'department', 'provider', 'image_url']
