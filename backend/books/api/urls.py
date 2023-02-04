from .views import bookAPIview
from django.urls import re_path

urlpatterns = [
    re_path(r'^$',bookAPIview.as_view(),name='book-create')
]
