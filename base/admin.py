from django.contrib import admin
from .models import Product, Order, OrderItem, ShippingAddress, Review, ProductImage, Exclusive, ExclusiveImage, SocialMedia, PaymentSupported, DownloadStore, CoverImage, IconImage, Token

# Register your models here.
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
admin.site.register(Review)
admin.site.register(ProductImage
)

admin.site.register(Exclusive)
admin.site.register(ExclusiveImage)
admin.site.register(SocialMedia)
admin.site.register(PaymentSupported)
admin.site.register(DownloadStore)
admin.site.register(CoverImage)
admin.site.register(IconImage)
admin.site.register(Token)



