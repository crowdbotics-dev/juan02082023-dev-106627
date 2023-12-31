from rest_framework import viewsets
from home.models import Newmo,Azul,NewMo45,Vik,Azul,Newmo,NewMo45,Vik,Azul,Newmo,NewMo45,Vik
from .serializers import NewmoSerializer,AzulSerializer,NewMo45Serializer,VikSerializer,AzulSerializer,NewmoSerializer,NewMo45Serializer,VikSerializer,AzulSerializer,NewmoSerializer,NewMo45Serializer,VikSerializer
from rest_framework import authentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from home.api.v1.serializers import (
    SignupSerializer,
    UserSerializer,
)


class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post"]


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})

class NewmoViewSet(viewsets.ModelViewSet):
    serializer_class = NewmoSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Newmo.objects.all()

class AzulViewSet(viewsets.ModelViewSet):
    serializer_class = AzulSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Azul.objects.all()

class NewMo45ViewSet(viewsets.ModelViewSet):
    serializer_class = NewMo45Serializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = NewMo45.objects.all()

class VikViewSet(viewsets.ModelViewSet):
    serializer_class = VikSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Vik.objects.all()
