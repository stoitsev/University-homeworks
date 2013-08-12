from django import forms
from wiki.models import Page

class PageForm(forms.ModelForm):
	owner = forms.CharField(required=False)
	title = forms.CharField(required=True, max_length=200, error_messages={'required': 'Please enter title for the page'})
	content = forms.CharField(required=True, error_messages={'required': 'Please enter some content'})

	class Meta:
		model = Page
		fields = ('title','content','owner')

	def __init__(self, *args, **kwargs):
		self.owner = kwargs.pop('user')
		super(PageForm, self).__init__(*args, **kwargs)

	def clean_owner(self):
		return self.owner