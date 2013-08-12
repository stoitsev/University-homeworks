from django.db import models
from django.contrib.auth.models import User

class Page(models.Model):
	title = models.CharField(max_length=200)
	content = models.TextField()
	parent = models.ForeignKey('self', null=True, blank=True, related_name='children')
	date_modified = models.DateField(auto_now=True)
	date_created = models.DateField(auto_now_add=True)
	owner=models.ForeignKey(User)

	def get_absolute_url(self):
		return u'/wiki/%d' % self.id 

class Revision(models.Model):
	page = models.ForeignKey(Page)
	message = models.TextField(blank=True)
	difference = models.TextField()
	date_created = models.DateField(auto_now_add=True)
