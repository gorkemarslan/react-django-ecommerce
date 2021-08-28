# Generated by Django 3.2.5 on 2021-08-28 12:55

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('payment_method', models.CharField(max_length=200)),
                ('tax_price', models.DecimalField(decimal_places=2, max_digits=7)),
                ('shipping_price', models.DecimalField(decimal_places=2, max_digits=7)),
                ('total_price', models.DecimalField(decimal_places=2, max_digits=7)),
                ('payment_done', models.BooleanField(default=False)),
                ('payment_date', models.DateTimeField()),
                ('delivery_done', models.BooleanField(default=False)),
                ('delivered_at', models.DateTimeField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('image', models.ImageField(default='/placeholder.png', upload_to='')),
                ('brand', models.CharField(max_length=200)),
                ('category', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=6)),
                ('rating', models.DecimalField(decimal_places=2, max_digits=3)),
                ('total_reviews', models.IntegerField(default=0)),
                ('stock', models.IntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='ShippingAddress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(max_length=200)),
                ('city', models.CharField(max_length=200)),
                ('postal_code', models.CharField(max_length=200)),
                ('country', models.CharField(max_length=200)),
                ('shipping_price', models.DecimalField(decimal_places=2, max_digits=7)),
                ('order', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='shop_api.order')),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('rating', models.IntegerField(default=0)),
                ('comment', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('product', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='shop_api.product')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('quantity', models.IntegerField(default=0)),
                ('price', models.DecimalField(decimal_places=2, max_digits=7)),
                ('image', models.CharField(max_length=200)),
                ('order', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='shop_api.order')),
                ('product', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='shop_api.product')),
            ],
        ),
    ]