from django import forms
from pomodoro.models import Pomodoro

class PomodoroForm(forms.ModelForm):
	owner = forms.CharField(required=False)
	text = forms.CharField(required=True, max_length=200, error_messages={'required': 'Please enter description below'})

	class Meta:
		model = Pomodoro
		fields = ('text', 'owner', 'completed')

	def __init__(self, *args, **kwargs):
		self.owner = kwargs.pop('user')
		super(PomodoroForm, self).__init__(*args, **kwargs)

	def clean_owner(self):
		return self.owner