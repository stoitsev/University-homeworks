from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.template.response import TemplateResponse
from django.views.generic import ListView, CreateView, DetailView, UpdateView
from django.views.decorators.http import require_http_methods
from django.http import HttpResponse, Http404
from django.shortcuts import redirect

from wiki.models import Page

from wiki.forms import PageForm

class WikiMixin(object):
	"""
	Provides overloaded functions that populates aditional params to kwargs
	and helps in providing authorization restrictions
	"""
	def get_form_kwargs(self):
		"""
		Adds the 'user' arguments to kwargs passed to view classes
		"""
		kwargs = super(WikiMixin, self).get_form_kwargs()
		kwargs['user'] = self.request.user
		return kwargs

	@method_decorator(login_required)
	def dispatch(self, *args, **kwargs):
		"""
		Provides authorization check
		"""
		return super(WikiMixin, self).dispatch(*args, **kwargs)

	def get_object(self, queryset=None):
		obj = super(WikiMixin, self).get_object(queryset)
		if obj.owner_id != self.request.user.id:
			raise Http404()
		return obj

@login_required
def index(request):
	"""
	Lists the main wiki page(the one with the lowest id)
	"""
	model = Page.objects.filter(owner_id = request.user.id).order_by('id')[0]   
	return TemplateResponse(request, 'wiki_home.html', {'model': model})

@login_required
def history(requrest):
	"""
	Lists the changes in the page
	"""
	return TemplateResponse(request, 'wiki_history.html')

@login_required
def delete(request, pk):
	"""
	Deletes wiki pages
	"""
	if pk and request.user.is_authenticated:
		model = Page.objects.filter(owner_id = request.user.id, id = pk)
		if model:
			model = model[0]
			model.delete()
	referer = request.META.get('HTTP_REFERER')
	if not referer:
		return HttpResponse("{status: true}", content_type="text/plain")
	else:
		return redirect(referer)

class AddPage(WikiMixin, CreateView):
	"""
	Adds new wiki page
	"""
	form_class = PageForm
	template_name = "wiki_create.html"

class PageView(WikiMixin, DetailView):
	"""
	Displays wiki page
	"""
	model = Page
	template_name = "wiki_page.html"

class UpdatePage(WikiMixin, UpdateView):
	"""
	Updates wiki pages
	"""
	form_class = PageForm
	model = Page
	template_name = "wiki_update.html"

class ListPages(ListView):
	"""
	Lists all wiki pages for the logged in user
	"""
	model = Page
	template_name = "wiki_list.html"
	paginate_by = 10

	def get_queryset(self):
		return Page.objects.filter(owner_id = self.request.user.id).order_by('-id')

