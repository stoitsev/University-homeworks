from django.conf.urls import patterns, include, url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib import admin
from wiki.views import AddPage, PageView, UpdatePage, ListPages
from pomodoro.views import AddPomodoro, ListPomodoro, HistoryPomodoro, UpdatePomodoro
admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'codaskill.views.home', name='home'),
    url(r'^accounts/profile/$', 'codaskill.views.dashboard', name='dashboard'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^accounts/', include('registration.backends.default.urls')),
    
    url(r'^pomodoro/update/(?P<pk>\d+)$', UpdatePomodoro.as_view(), name='pomodoro_update'),
    url(r'^pomodoro/create$', AddPomodoro.as_view(), name='pomodoro_new'),  
    url(r'^pomodoro/$', ListPomodoro.as_view(), name='pomodoro_home'),
    url(r'^pomodoro/history$', HistoryPomodoro.as_view(), name='pomodoro_history'),
    url(r'^pomodoro/done/(?P<pk>\d+)$', 'pomodoro.views.done', name='pomodoro_done'),
    url(r'^pomodoro/delete/(?P<pk>\d+)$', 'pomodoro.views.delete', name='pomodoro_delete'),

    url(r'^wiki/update/(?P<pk>\d+)$', UpdatePage.as_view(), name='wiki_update'),
    url(r'^wiki/(?P<pk>\d+)$', PageView.as_view(), name='wiki_view'),
    url(r'^wiki/create$', AddPage.as_view(), name='wiki_new'),
    url(r'^wiki/all$', ListPages.as_view(), name='wiki_list'),
    url(r'^wiki/$', 'wiki.views.index', name='wiki_home'),
    url(r'^wiki/delete/(?P<pk>\d+)$', 'wiki.views.delete', name='wiki_delete'),
)

urlpatterns += staticfiles_urlpatterns()


