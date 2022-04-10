from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register/', views.registerUser, name='register'),
    path('users/profile/', views.getUserProfile, name="profile"),
    path('products/', views.getProducts, name="products"),
    path('product/<int:pk>/', views.getProduct, name="product"),
    path('admin/create/', views.createProduct, name="createproduct"),

    path('admin/uploadmedia/', views.uploadSocialMediaImages, name="createmedia"),
    path('admin/uploadpayment/', views.uploadPaymentImages, name="createpayment"),
    path('admin/uploadstore/', views.uploadDownloadStoreImages, name="createstore"),
    path('admin/uploadreview/', views.uploadReview, name="review"),
    path('admin/uploadexclusive/', views.uploadExclusiveImages, name="exclusive"),
    path('admin/uploadcover/', views.uploadCoverImage, name="cover"),
    path('admin/uploadicon/', views.uploadIconImage, name="icon"),
    path('admin/uploadtoken/', views.uploadToken, name="tokenupload"),
    path('admin/deletetoken/', views.deleteToken, name="tokendelete"),

    path('static/', views.getStaticData, name="static"),
]