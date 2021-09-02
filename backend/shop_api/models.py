from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone


class Product(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(default='/placeholder.png')
    brand = models.CharField(max_length=200)
    category = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    rating = models.DecimalField(max_digits=3, decimal_places=2)
    total_reviews = models.IntegerField(default=0)
    stock = models.IntegerField(default=0)
    created_at = models.DateTimeField(default=timezone.now, editable=False)

    def __str__(self):
        return self.name


class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(get_user_model(), on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200)
    rating = models.IntegerField(default=0)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.rating)


class Order(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.SET_NULL, null=True)
    payment_method = models.CharField(max_length=200)
    tax_price = models.DecimalField(max_digits=7, decimal_places=2)
    shipping_price = models.DecimalField(max_digits=7, decimal_places=2)
    total_price = models.DecimalField(max_digits=7, decimal_places=2)
    payment_done = models.BooleanField(default=False)
    payment_date = models.DateTimeField(auto_now_add=False)
    delivery_done = models.BooleanField(default=False)
    delivered_at = models.DateTimeField(auto_now_add=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.created_at)


class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200)
    quantity = models.IntegerField(default=0)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    image = models.CharField(max_length=200)

    def __str__(self):
        return str(self.name)


class ShippingAddress(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    postal_code = models.CharField(max_length=200)
    country = models.CharField(max_length=200)
    shipping_price = models.DecimalField(max_digits=7, decimal_places=2)

    def __str__(self):
        return str(self.address)
