from django.urls import path
from . import views

urlpatterns = [
    path('', views.status_check, name='status_check'),
    path('function1/', views.function1, name='function1'),
    path('function2/', views.function2, name='function2'),
    path('function3/', views.function3, name='function3'),
]