from django.core.exceptions import *
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from play.models import UserModel, TeamModel, MatchModel
from play.serializers import UserSerializer, TeamModelSerializer, MatchModelSerializer

# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        return UserModel.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=False):
            serializer.save()
            return Response({"message": "Operate successfully"}, status=status.HTTP_201_CREATED)
        else:
            return Response({"message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def list(self, request):
        # queryset = UserModel.objects.all()
        # serializer = UserSerializer(queryset, many=True)
        serializer = UserSerializer(self.get_queryset(), many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def retrieve(self, request, uuid=None):
        try:
            objects = UserModel.objects.get(id=uuid)
            serializer = UserSerializer(objects)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response({"message": "존재하지 않는 UUID({})".format(uuid)}, status=status.HTTP_404_NOT_FOUND)

    def update(self, request, uuid=None):
        objects = UserModel.objects.get(id=uuid)
        serializer = UserSerializer(objects, data=request.data)
        if serializer.is_valid(raise_exception=False):
            serializer.save()
            return Response({"message": "Operate successfully"}, status=status.HTTP_200_OK)
        else:
            return Response({"message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, uuid=None):
        objects = UserModel.objects.get(id=uuid)
        objects.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class TeamModelViewSet(viewsets.ModelViewSet):
    queryset = TeamModel.objects.all()
    serializer_class = TeamModelSerializer

    def get_queryset(self):
        return TeamModel.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = TeamModelSerializer(data=request.data)
        if serializer.is_valid(raise_exception=False):
            serializer.save()
            return Response({"message": "Operate successfully"}, status=status.HTTP_201_CREATED)
        else:
            return Response({"message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def list(self, request):
        serializer = TeamModelSerializer(self.get_queryset(), many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def retrieve(self, request, uuid=None):
        try:
            objects = TeamModel.objects.get(id=uuid)
            serializer = TeamModelSerializer(objects)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response({"message": "존재하지 않는 UUID({})".format(uuid)}, status=status.HTTP_404_NOT_FOUND)

    def update(self, request, uuid=None):
        objects = TeamModel.objects.get(id=uuid)
        serializer = TeamModelSerializer(objects, data=request.data)
        if serializer.is_valid(raise_exception=False):
            serializer.save()
            return Response({"message": "Operate successfully"}, status=status.HTTP_200_OK)
        else:
            return Response({"message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, uuid=None):
        objects = TeamModel.objects.get(id=uuid)
        objects.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class MatchModelViewSet(viewsets.ModelViewSet):
    queryset = MatchModel.objects.all()
    serializer_class = MatchModelSerializer

    def get_queryset(self):
        return MatchModel.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = MatchModelSerializer(data=request.data)
        if serializer.is_valid(raise_exception=False):
            serializer.save()
            return Response({"message": "Operate successfully"}, status=status.HTTP_201_CREATED)
        else:
            return Response({"message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def list(self, request):
        serializer = MatchModelSerializer(self.get_queryset(), many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def retrieve(self, request, uuid=None):
        try:
            objects = MatchModel.objects.get(id=uuid)
            serializer = MatchModelSerializer(objects)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response({"message": "존재하지 않는 UUID({})".format(uuid)}, status=status.HTTP_404_NOT_FOUND)

    def update(self, request, uuid=None):
        objects = MatchModel.objects.get(id=uuid)
        serializer = MatchModelSerializer(objects, data=request.data)
        if serializer.is_valid(raise_exception=False):
            serializer.save()
            return Response({"message": "Operate successfully"}, status=status.HTTP_200_OK)
        else:
            return Response({"message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, uuid=None):
        objects = MatchModel.objects.get(id=uuid)
        objects.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
