from django.urls import path
from django.conf.urls import url

from .views import index

# Create your urls here.

urlpatterns = [
    path('', index),  # for the empty url
    url(r'^.*/$', index)  # for all other urls
]
