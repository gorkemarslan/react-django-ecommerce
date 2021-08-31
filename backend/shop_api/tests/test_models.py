from django.contrib.auth import get_user_model
from django.test import TestCase


class UserModelTests(TestCase):
    def setUp(self) -> None:
        User = get_user_model()
        self.user = User.objects.create_user(username="testuser",
                                             email='testuser@mail.com',
                                             password="pass123",
                                             first_name="first_name",
                                             last_name='last_name')

    def test_user_data(self):
        self.assertEqual(str(self.user), self.user.username)
