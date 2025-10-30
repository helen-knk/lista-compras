from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ItemViewSet

router = DefaultRouter()
router.register(r'itens', ItemViewSet, basename='itens')

urlpatterns = [
    path('', include(router.urls)),
]
