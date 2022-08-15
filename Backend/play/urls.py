from django.urls import re_path
from play.views import UserViewSet

urlpatterns = [
    re_path('users/(?P<uuid>[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$',
            UserViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'})),
    re_path('users/', UserViewSet.as_view({'get': 'list', 'post': 'create'})),
    re_path('team/(?P<uuid>[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$',
            UserViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'})),
    re_path('team/', UserViewSet.as_view({'get': 'list', 'post': 'create'})),


]
