from django.urls import path
from api.views import api_page
from api.views import product_list, product_detail, category_detail, category_list

urlpatterns = [
    path('', api_page),
    path('products/', product_list),
    path('products/<int:id>', product_detail),
    path('categories/', category_list),
    path('categories/<int:id>', category_detail)
]
