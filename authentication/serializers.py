from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

# Create your serializers here.

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    
    @classmethod
    def get_token(cls, user):
    
        token = super().get_token(user)

        # Add custom claims
        token['fav_color'] = user.fav_color
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    
    serializer_class = MyTokenObtainPairSerializer