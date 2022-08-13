from django.urls import re_path
from play.views import UserViewSet

urlpatterns = [
    re_path('(?P<uuid>[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$',
            UserViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'})),
    re_path('', UserViewSet.as_view({'get': 'list', 'post': 'create'})),
]
