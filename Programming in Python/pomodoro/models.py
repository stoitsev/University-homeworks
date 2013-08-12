from django.db import models
from django.contrib.auth.models import User

class Pomodoro(models.Model):
	text = models.CharField(max_length=200)
	owner = models.ForeignKey(User)
	completed = models.BooleanField(default=False)

	def get_absolute_url(self):
		"""
		Returns the absolute url for a pomodoro
		"""
		return u'/pomodoro/%d' % self.id 	
