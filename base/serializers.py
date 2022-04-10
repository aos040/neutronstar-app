from dataclasses import field
from itertools import product
from pyexpat import model
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product, ProductImage, Exclusive, ExclusiveImage, SocialMedia, PaymentSupported, DownloadStore, Review, CoverImage, IconImage, Token
from rest_framework_simplejwt.tokens import RefreshToken

class ProductSerializer(serializers.ModelSerializer):

    image_urls = serializers.SerializerMethodField('image_serializer')

    def image_serializer(self, Product):
        id = Product.id
        images = ProductImage.objects.all().filter(product = id)
        return productImageSerializer(images, many=True).data


    class Meta:
        model = Product
        fields = '__all__'

class productImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductImage
        fields = '__all__'

class ExclusiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exclusive
        fields = '__all__'

class ExclusiveImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExclusiveImage
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'is_staff']

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'is_staff', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

class SocialMediaSerializer(serializers.ModelSerializer):

    class Meta:
        model = SocialMedia
        fields = '__all__'

class PaymentSupportedSerializer(serializers.ModelSerializer):

    class Meta:
        model = PaymentSupported
        fields = '__all__'

class DownloadStoreSerializer(serializers.ModelSerializer):

    class Meta:
        model = DownloadStore
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = '__all__'


class CoverImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = CoverImage
        fields = '__all__'

class IconImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = IconImage
        fields = '__all__'

class TokenSerializer(serializers.ModelSerializer):

    class Meta:
        model = Token
        fields = '__all__'
