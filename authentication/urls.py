from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import ObtainTokenPairWithColorView

# Create your urls here.

urlpatterns = [
    # path('token/obtain/', jwt_views.TokenObtainPairView.as_view(), name='token_create'),  # override sjwt stock token
    path('token/obtain/', ObtainTokenPairWithColorView.as_view(), name='token_create'), # create custom claims
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]
