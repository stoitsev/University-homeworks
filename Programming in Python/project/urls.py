from django.conf.urls.defaults import *
import os

handler500 = 'djangotoolbox.errorviews.server_error'

urlpatterns = patterns('',
    ('^_ah/warmup$', 'djangoappengine.views.warmup'),
    (r'^static/(?P<path>.*)$', 'django.views.static.serve',
        {'document_root': os.path.abspath(os.path.dirname(__file__))+'/static'}),
    ('^$', 'django.views.generic.simple.direct_to_template',
        {'template': 'home.html'}),
)
