
from email.mime import image
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Product(models.Model):

    user                    =   models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name                    =   models.CharField(max_length=200, null=True, blank=True)
    picture                   =   models.ImageField(null=True, blank=True)
    category                =   models.CharField(max_length=50, null=True, blank=True)
    gender                  =   models.CharField(max_length=50, null=True, blank=True)
    trending                =   models.BooleanField(default=True)
    description             =   models.TextField(null=True, blank=True)
    price                   =   models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    quantityInStock         =   models.IntegerField(null=True, blank=True, default=0)
    discount                =   models.IntegerField(null=True, blank=True)
    rating                  =   models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    num_reviews             =   models.IntegerField(null=True, blank=True, default=0)
    createdAt               =   models.DateTimeField(auto_now_add=True)
    

    def __str__(self):
        return self.name

class Order(models.Model):

    user                    =   models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    paymentMthod            =   models.CharField(max_length=200, null=True, blank=True)
    tax                     =   models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    shipping                =   models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    total                   =   models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    isPaid                  =   models.BooleanField(default=False)
    isDelivered             =   models.BooleanField(default=False)
    createdAt               =   models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return (self.createdAt)

class OrderItem(models.Model):

    product                 =   models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order                   =   models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name                    =   models.CharField(max_length=200, null=True, blank=True)
    quantity                =   models.IntegerField(null=True, blank=True)
    price                   =   models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    image                   =   models.CharField(max_length=200, null=True, blank=True)
   

    def __str__(self):
        return str(self.name)

class ShippingAddress(models.Model):

    order                   =   models.OneToOneField(Order, on_delete=models.CASCADE, null=True, blank=True)
    country                 =   models.CharField(max_length=200, null=True, blank=True)
    city                    =   models.CharField(max_length=200, null=True, blank=True)
    address                 =   models.CharField(max_length=200, null=True, blank=True)
    postCode                =   models.IntegerField(null=True, blank=True)
    phone                   =   models.IntegerField(null=True, blank=True)
    image                   =   models.CharField(max_length=200, null=True, blank=True)
    
    def __str__(self):
        return str(self.country)


class Review(models.Model):

    # product                 =   models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    # user                    =   models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    # rating                  =   models.IntegerField(null=True, blank=True)
    name                    =   models.CharField(max_length=200, null=True, blank=True)
    image                   =   models.ImageField(null=False, blank=False)
    comment                 =   models.TextField(null=True, blank=True)

    def __str__(self):
        return str(self.name)

class ProductImage(models.Model):
    
    product                 =   models.ForeignKey(Product, on_delete=models.CASCADE, null=True)
    image                   =   models.ImageField(null=False, blank=False)



class Exclusive(models.Model):

    title                   =   models.CharField(max_length=200, null=True, blank=True)
    description             =   models.TextField(null=True, blank=True)

    def __str__(self):
        return str(self.title)


class ExclusiveImage(models.Model):
    
    exclusive               =   models.ForeignKey(Exclusive, on_delete=models.CASCADE, null=True)
    image                   =   models.ImageField(null=True, blank=False)

class SocialMedia(models.Model):

    name                    =   models.CharField(max_length=200, null=True, blank=True)
    image                   =   models.ImageField(null=False, blank=False)

    def __str__(self):
        return str(self.name)

class PaymentSupported(models.Model):

    name                    =   models.CharField(max_length=200, null=True, blank=True)
    image                   =   models.ImageField(null=False, blank=False)

    def __str__(self):
        return str(self.name)


class DownloadStore(models.Model):

    name                    =   models.CharField(max_length=200, null=True, blank=True)
    image                   =   models.ImageField(null=False, blank=False)

    def __str__(self):
        return str(self.name)

class CoverImage(models.Model):

    name                    =   models.CharField(max_length=200, null=True, blank=True)
    image                   =   models.ImageField(null=False, blank=False)

    def __str__(self):
        return str(self.name)

class IconImage(models.Model):

    name                    =   models.CharField(max_length=200, null=True, blank=True)
    image                   =   models.ImageField(null=False, blank=False)

    def __str__(self):
        return str(self.name)

class Token(models.Model):

    name                    =   models.CharField(max_length=200, null=True, blank=True)
    token                   =   models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return str(self.name)



 