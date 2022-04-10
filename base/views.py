from email.mime import image
from email.policy import HTTP
from itertools import product
from unicodedata import category
from urllib import response
from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status
from . models import Exclusive, ExclusiveImage, IconImage, ProductImage, Product, SocialMedia, PaymentSupported, DownloadStore, Review, CoverImage, IconImage, Token
from .serializers import ProductSerializer, ExclusiveSerializer, ExclusiveImageSerializer, UserSerializer, UserSerializerWithToken, SocialMediaSerializer, PaymentSupportedSerializer, DownloadStoreSerializer, ReviewSerializer, CoverImageSerializer, IconImageSerializer, TokenSerializer

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

#from backend.base import serializers

# Create your views here.
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/products/',
        '/api/products/create/',

        '/api/products/upload/',

        '/api/products/<id>/reviews/',

        '/api/products/top/',
        '/api/products/<id>/',

        '/api/products/delete/<id>/',
        '/api/products/<update>/<id>/',
    ]
    return Response(routes)

@api_view(['GET'])
def getProducts(request):
  
    products = Product.objects.all()
    product_serializer = ProductSerializer(products, many=True)

    exclusive = Exclusive.objects.all()
    exclusive_serializer = ExclusiveSerializer(exclusive, many=True)

    exclusive_image = ExclusiveImage.objects.all()
    exclusive_image_serializer = ExclusiveImageSerializer(exclusive_image, many=True)

    
    return Response({'products': product_serializer.data, 'exclusive': exclusive_serializer.data, 'exclusive_image': exclusive_image_serializer.data})

@api_view(['GET'])
def getProduct(request, pk):
  
    product = Product.objects.get(id=pk)
    product_serializer = ProductSerializer(product, many=False)

    return Response(product_serializer.data)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def createProduct(request):
    user = request.user
    data = request.data
  
    product = Product.objects.create(
        user = user,
        name = data['name'],
        category = data['category'],
        price =  data['price'],
        discount = data['discount'],
        quantityInStock = data['quantityInStock'],
        description = data['description']
    )

    image = ProductImage.objects.create(product = product, image=request.FILES.get('image1'))
    image = ProductImage.objects.create(product = product, image=request.FILES.get('image2'))
    image = ProductImage.objects.create(product = product, image=request.FILES.get('image3'))
    image = ProductImage.objects.create(product = product, image=request.FILES.get('image4'))

    serializer = ProductSerializer(product, many=False)

    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def uploadSocialMediaImages(request):

    data = request.data
    try:
        mediaObject = SocialMedia.objects.create(name=data['name'], image=request.FILES.get('image'))
        media_serializer =  SocialMediaSerializer(mediaObject, many=False)

        return Response(media_serializer.data)
    except:
        message = {'detail:', 'Could not create content'}
        return Response(message, status = status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def uploadPaymentImages(request):

    data = request.data
    try:
        paymentObject = PaymentSupported.objects.create(name=data['name'], image=request.FILES.get('image'))
        payment_serializer =  PaymentSupportedSerializer(paymentObject, many=False)
        return Response(payment_serializer.data)
    except:
        message = {'detail:', 'Could not create content'}
        return Response(message, status = status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def uploadDownloadStoreImages(request):

    data = request.data
    try:
        storeObject = DownloadStore.objects.create(name=data['name'], image=request.FILES.get('image'))
        store_serializer =  DownloadStoreSerializer(storeObject, many=False)
        return Response(store_serializer.data)
    except:
        message = {'detail:', 'Could not create content'}
        return Response(message, status = status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def uploadReview(request):

    data = request.data
    try:
        reviewObject = Review.objects.create(name=data['name'], image=request.FILES.get('image'), comment=data['comment'])
        review_serializer =  ReviewSerializer(reviewObject, many=False)
        return Response(review_serializer.data)
    except:
        message = {'detail:', 'Could not create content'}
        return Response(message, status = status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def uploadExclusiveImages(request):

    data = request.data
  
    try:
        exclusiveObj = Exclusive.objects.create(title=data['title'], description=data['description'])
        image1 = ExclusiveImage.objects.create(exclusive=exclusiveObj, image=request.FILES.get('image1'))
        image1 = ExclusiveImage.objects.create(exclusive=exclusiveObj, image=request.FILES.get('image2'))

        exclusive_serializer =  ExclusiveSerializer(exclusiveObj, many=False)
        return Response(exclusive_serializer.data)
    except:
        message = {'detail:', 'Could not create content'}
        return Response(message, status = status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def uploadCoverImage(request):

    data = request.data
    try:
        coverImageObj = CoverImage.objects.create(name=data['name'], image=request.FILES.get('image'))
  
        return Response('Cover was uploaded')
    except:
        message = {'detail:', 'Could not create content'}
        return Response(message, status = status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def uploadIconImage(request):

    data = request.data
    try:
        iconImageObj = IconImage.objects.create(name=data['name'], image=request.FILES.get('image'))
  
        icon_serializer =  IconImageSerializer(iconImageObj, many=False)
        return Response(icon_serializer.data)
    except:
        message = {'detail:', 'Could not create content'}
        return Response(message, status = status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def uploadToken(request):

    data = request.data
    try:
        tokenobj = Token.objects.create(name=data['name'], token=data['token'])
  
        token_serializer =  TokenSerializer(tokenobj, many=False)
        return Response(token_serializer.data)
    except:
        message = {'detail:', 'Could not upload token'}
        return Response(message, status = status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteToken(request):

    data = request.data
    try:
        tokenobj = Token.objects.get(name=data['name'], token=data['token'])
        tokenobj.delete()

        message = {'detail:', 'Token deleted'}
        return Response(message)
    except:
        message = {'detail:', 'Could not upload token'}
        return Response(message, status = status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getStaticData(request):

    try:
        socialmedia = SocialMedia.objects.all()
        socialmedia_serializer = SocialMediaSerializer(socialmedia, many=True)

        paymentsupported = PaymentSupported.objects.all()
        paymentsupported_serializer = PaymentSupportedSerializer(paymentsupported, many=True)

        downloadstore = DownloadStore.objects.all()
        downloadstore_serializer = DownloadStoreSerializer(downloadstore, many=True)
        
        comments = Review.objects.all()
        comments_serializer = ReviewSerializer(comments, many=True)
        
        cover = CoverImage.objects.all()
        cover_serializer = CoverImageSerializer(cover, many=True)

        icon = IconImage.objects.all()
        icon_serializer = IconImageSerializer(icon, many=True)

        tokens = Token.objects.all()
        tokens_ser = TokenSerializer(tokens, many=True)

        return Response({'socialmedia': socialmedia_serializer.data, 'paymentsupported': paymentsupported_serializer.data, 'downloadstore': downloadstore_serializer.data, 'comments':comments_serializer.data, 'cover':cover_serializer.data, 'icon':icon_serializer.data, 'tokens':tokens_ser.data})

    except:
        message = {'detail:', 'Could not create content'}
        return Response(message, status = status.HTTP_400_BAD_REQUEST)



@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            first_name = data['first_name'],
            last_name = data['last_name'],
            username = data['email'],
            email = data['email'],
            password = make_password(data['password'])
        )
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail:', 'User with this email already exists'}
        return Response(message, status = status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)



