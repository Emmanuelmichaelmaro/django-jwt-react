from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from .views import ObtainTokenPairWithColorView, CustomUserCreate, HelloWorldView, LogoutAndBlacklistRefreshTokenForUserView

# Create your urls here.

urlpatterns = [
    path('user/create/', CustomUserCreate.as_view(), name="create_user"),
    # path('token/obtain/', jwt_views.TokenObtainPairView.as_view(), name='token_create'),  # override sjwt stock token
    path('token/obtain/', ObtainTokenPairWithColorView.as_view(), name='token_create'), # create custom claims
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('hello/', HelloWorldView.as_view(), name='hello_world'), # protected view
    path('blacklist/', LogoutAndBlacklistRefreshTokenForUserView.as_view(), name='blacklist') # blacklisting token
]
