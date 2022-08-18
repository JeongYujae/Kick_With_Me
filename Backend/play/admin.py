from django.contrib import admin
from .models import TeamModel, MatchModel

admin.site.register(MatchModel)
admin.site.register(TeamModel)
