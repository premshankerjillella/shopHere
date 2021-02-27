from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('index/', views.index, name="index"),
    path('register/', views.register, name='register')
]


router = DefaultRouter()
router.register('department', views.DepartmentViewset, basename='department')
router.register('provider', views.ProviderViewset, basename='provider')
router.register('product', views.ProductViewset, basename='product')

urlpatterns = urlpatterns + router.urls