from django.contrib import admin
from .models import Product


class ProductAdmin(admin.ModelAdmin):
    class Meta:
        model = Product
        fields = '__all__'


admin.site.register(Product, ProductAdmin)
