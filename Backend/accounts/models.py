from django.db import models
from django.contrib.auth.models import AbstractUser

from django.core.validators import RegexValidator


class User(AbstractUser):
    name = models.CharField(blank=False, max_length=22)
    phone_number = models.CharField(
        validators=[RegexValidator(r"^010-?[1-9]\d{3}-?\d{4}$")], max_length=13)
    avatar = models.ImageField(
        blank=True, upload_to="accounts/avatar/%Y/%m/%d", help_text="48px * 48px png or jpg needed")
    age = models.IntegerField(null=True, blank=False)
    position = models.CharField(max_length=4, blank=False)


# 프로필 이미지 추가하기
 # @property
    # def avatar_url(self):
    #     if self.avatar:
    #         return self.avatar.url
    #     else:
    #         return resolve_url("pydenticon_image", self.username)
