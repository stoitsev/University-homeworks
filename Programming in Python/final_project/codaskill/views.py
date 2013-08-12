from django.template.response import TemplateResponse

def home(request):
	"""
	Provides the home page for guests
	"""
	return TemplateResponse(request, 'index.html')

def dashboard(request):
	"""
	Provides the home page for logged in users
	"""
	return TemplateResponse(request, 'dashboard.html')