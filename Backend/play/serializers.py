from rest_framework import serializers
from play.models import UserModel, TeamModel, MatchModel

# 직렬화 프로그램 Python file -> JSON 객체로 전환해준다고 생각하자


class UserSerializer(serializers.ModelSerializer):
    event_age = serializers.SerializerMethodField(help_text="Custom Field")

    # def get_event_age(self, instance):
    #     return True if instance.age < 30 else False
    def get_event_age(self, instance):
        return True

    class Meta:
        model = UserModel
        fields = "__all__"

    def validate_email(self, instance):

        if "admin" in instance:
            raise serializers.ValidationError(detail="사용할 수 없는 메일 계정입니다.")

        return instance

    def validate_name(self, instance):

        if len(instance) < 2:
            raise serializers.ValidationError(detail="이름이 올바르지 않습니다.")

        return instance

    # def validate_age(self, instance):

    #     if instance < 19:
    #         raise serializers.ValidationError(detail="회원 가입이 불가능한 나이입니다.")

    #     return instance

    def validate_nationality(self, instance):
        return instance


class TeamModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamModel
        fields = "__all__"

    # 팀 이름 중복검사
    def validate_teamname(self, instance):
        teamname = Team.objects.filter(teamname=instance)
        if teamname.exists():
            raise serializers.ValidationError('Team already exists')

        return instance

    def validate_teamname_length(self, instance):

        if len(instance) < 1 or len(instance) < 12:
            raise serializers.ValidationError(
                detail="Team Name should be shorter than 12, longer than 1")

        return instance


class MatchModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = MatchModel
        fields = "__all__"

    def validate_match_time(self, instance):
        matchname = Match.objects.filter(matchname=instance)
        matchdate = Match.objects.filter(matchdate=instance)
        if teamname.exists() and matchdate.exists():
            raise serializers.ValidationError('Team already exists')

        return instance
