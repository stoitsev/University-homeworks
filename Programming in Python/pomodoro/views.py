from django.template.response import TemplateResponse
from django.utils.decorators import method_decorator
from django.views.decorators.http import require_http_methods
from django.views.generic import ListView, CreateView, DetailView, UpdateView
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, Http404
from django.shortcuts import redirect

from pomodoro.models import Pomodoro
from pomodoro.forms import PomodoroForm

class PomodoroMixin(object):
	"""
	Provides overloaded functions that populates aditional params to kwargs
	and helps in providing authorization restrictions
	"""
	def get_form_kwargs(self):
		"""
		Adds the 'user' arguments to kwargs passed to view classes
		"""
		kwargs = super(PomodoroMixin, self).get_form_kwargs()
		kwargs['user'] = self.request.user
		return kwargs

	@method_decorator(login_required)
	def dispatch(self, *args, **kwargs):
		"""
		Provides authorization check
		"""
		return super(PomodoroMixin, self).dispatch(*args, **kwargs)

	def get_object(self, queryset=None):
		obj = super(PomodoroMixin, self).get_object(queryset)
		if obj.owner_id != self.request.user.id:
			raise Http404()
		return obj

class AddPomodoro(PomodoroMixin, CreateView):
	"""
	Creates new pomodoro todo tasks
	"""
	form_class = PomodoroForm
	success_url = '/pomodoro'
	template_name = "pomodoro_create.html"

class UpdatePomodoro(PomodoroMixin, UpdateView):
	"""
	Updates pomodoro todo tasks
	"""
	form_class = PomodoroForm
	model = Pomodoro
	success_url = '/pomodoro'
	template_name = "pomodoro_update.html"

class ListPomodoro(PomodoroMixin, ListView):
	"""
	Lists all pomodoro todos for the logged in user
	"""
	model = Pomodoro
	template_name = "pomodoro_home.html"
	paginate_by = 30

	def get_context_data(self, **kwargs):
		"""
		Provides context data from the request to the object
		"""
		context = super(ListPomodoro, self).get_context_data(**kwargs)
		context.update({ 'request': self.request })
		return context

	def get_queryset(self):
		"""
		Returns the queryset that is going to be listed on the user's page
		"""
		return Pomodoro.objects.filter(owner_id = self.request.user.id, completed = False).order_by('-id')

@login_required
def done(request, pk):
	"""
	Marks pomodoro as done
	"""
	if pk and request.user.is_authenticated:
		model = Pomodoro.objects.filter(owner_id = request.user.id, id = pk)
		if model:
			model = model[0]
			model.completed = True
			model.save()
	if not request.is_ajax():
		return redirect('/pomodoro')
	else:

		return HttpResponse("{status: true}", content_type="text/plain")

@login_required
def delete(request, pk):
	"""
	Deletes pomodoro todos
	"""
	if pk and request.user.is_authenticated:
		model = Pomodoro.objects.filter(owner_id = request.user.id, id = pk)
		if model:
			model = model[0]
			model.delete()
	referer = request.META.get('HTTP_REFERER')
	if not referer:
		return HttpResponse("{status: true}", content_type="text/plain")
	else:
		return redirect(referer)


class HistoryPomodoro(PomodoroMixin, ListView):
	"""
	List pomodoros that are marked as 'done' in separate section
	"""
	model = Pomodoro
	template_name = "pomodoro_history.html"
	paginate_by = 30

	def get_context_data(self, **kwargs):
		"""
		Provides context data from the request to the object
		"""
		context = super(HistoryPomodoro, self).get_context_data(**kwargs)
		context.update({ 'request': self.request })
		return context

	def get_queryset(self):
		"""
		Returns the queryset that is going to be listed on the user's history page
		"""
		return Pomodoro.objects.filter(owner_id = self.request.user.id, completed = True).order_by('-id')