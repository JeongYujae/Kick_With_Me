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
        # verbose_name = "유저 정보"
        # verbose_name_plural = "유저 정보"
        ordering = ["name", "age"]


class TeamModel(models.Model):
    id = models.UUIDField(help_text="Unique key",
                          primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(help_text="Team Name",
                            max_length=25, blank=False, null=False)
    age_range = models.CharField(
        help_text='Team Age Range', max_length=20, blank=True)
    location = models.CharField(
        help_text='Team Locatiion', max_length=40, blank=False)
    level = models.IntegerField(help_text='Team Level', blank=False)

    class Meta:
        # verbose_name = "팀 정보"
        # verbose_name_plural = "유저 정보"
        ordering = ["name", "level"]


class MatchModel(models.Model):
    id = models.UUIDField(help_text="Unique key",
                          primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(help_text="Stadium Name",
                            max_length=30, blank=False, null=False)
    date = models.CharField(help_text='Match date and time',
                            max_length=22, blank=False, null=False)
    level = models.IntegerField(help_text='Match Level', blank=False)
    limitation = models.IntegerField(
        help_text='Limitation for the personnel', blank=False)

    class Meta:
        ordering = ["date"]
