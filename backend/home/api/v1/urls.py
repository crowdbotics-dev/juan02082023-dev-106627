from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import NewmoViewSet,AzulViewSet,NewMo45ViewSet,VikViewSet,AzulViewSet,NewmoViewSet,NewMo45ViewSet,VikViewSet,AzulViewSet,NewmoViewSet,NewMo45ViewSet,VikViewSet,AzulViewSet,NewmoViewSet,NewMo45ViewSet,VikViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('newmo', NewmoViewSet )
router.register('azul', AzulViewSet )
router.register('newmo45', NewMo45ViewSet )
router.register('vik', VikViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
