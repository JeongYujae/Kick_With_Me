from django.contrib import admin
from django.urls import path, re_path
from django.conf.urls import include
from play.views import UserViewSet

urlpatterns = [
    path('', include('play.urls'))
]
