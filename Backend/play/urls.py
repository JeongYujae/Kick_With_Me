from django.urls import re_path, path
from play.views import TeamModelViewSet,  MatchModelViewSet

urlpatterns = [

    #     re_path('users/(?P<uuid>[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$',
    #             UserViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'})),
    #     path('users/', UserViewSet.as_view({'get': 'list', 'post': 'create'})),
    re_path('team/(?P<uuid>[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$',
            TeamModelViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'})),
    path('team/', TeamModelViewSet.as_view({'get': 'list', 'post': 'create'})),
    re_path('match/(?P<uuid>[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$',
            MatchModelViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'})),
    path(
        'match/', MatchModelViewSet.as_view({'get': 'list', 'post': 'create'})),


]
