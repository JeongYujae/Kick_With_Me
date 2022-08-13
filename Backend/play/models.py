from django.db import models
import uuid


class UserModel(models.Model):
    id = models.UUIDField(help_text="Unique key",
                          primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(help_text="User Full Name",
                            max_length=255, blank=False, null=False)
    age = models.PositiveIntegerField(
        help_text="User Age", blank=False, null=False)
    position = models.CharField(
        help_text="User Position", max_length=20, blank=False, null=False)
    created_date = models.DateTimeField(
        help_text="Created Date time", auto_now_add=True)
    updated_date = models.DateTimeField(
        help_text="Updated Date time", auto_now=True)

    class Meta:
        verbose_name = "유저 정보"
        verbose_name_plural = "유저 정보"
        ordering = ["name", "age"]
