from django.test import TestCase
from django.contrib.auth.models import User
from django.test.client import Client

from wiki.models import Page

class WikiModelTest(TestCase):
	def setUp(self):
		self.user, is_new = User.objects.get_or_create(username = 'pacitu')
		if is_new:
			self.user.set_password('parola')
			self.user.save()
		self.client = Client().post('/accounts/login/', {'username': 'pacitu', 'password': 'parola'}).client

	def test_creating_a_new_model_page_and_saving_it_to_the_database(self):
		page = Page()
		page.title = "Page title";
		page.content = "Page content";
		page.owner = self.user

		page.save()

		all_pages = Page.objects.all()
		self.assertEquals(len(all_pages), 1)

		only_page_in_database = all_pages[0]
		self.assertEquals(only_page_in_database, page)

		self.assertEquals(only_page_in_database.title, "Page title")
		self.assertEquals(only_page_in_database.content, "Page content")
		self.assertEquals(only_page_in_database.owner_id, self.user.id)

	def test_create_new_page_via_request(self):
		title = "Page title"
		content = "Page content"
		res = self.client.post('/wiki/create', {'title': title, 'content': content})

		self.assertEquals(302, res.status_code)

		res = self.client.get('/wiki/all')
		self.assertTrue(title in res.content)

	def test_update_page_via_request(self):
		page = Page()
		page.title = "Page title";
		page.content = "Page content";
		page.owner = self.user

		page.save()

		title = "New title"
		content = "New content"
		res = self.client.post('/wiki/update/' + str(page.id), {'title': title, 'content': content})

		self.assertEquals(302, res.status_code)

		res = self.client.get('/wiki/' + str(page.id))
		self.assertTrue(title in res.content)
		self.assertTrue(content in res.content)

	def test_delete_page(self):
		page = Page()
		page.title = "Page title";
		page.content = "Page content";
		page.owner = self.user

		page.save()

		res = self.client.get('/wiki/all')
		self.assertTrue("Page title" in res.content)

		res = self.client.get('/wiki/delete/' + str(page.id))
		self.assertEquals(200, res.status_code)

		res = self.client.get('/wiki/all')
		self.assertFalse("Page title" in res.content)

	def test_cant_delete_someone_elses_page(self):
		new_user = User.objects.create(username = 'pesho')
		new_user.set_password('parola')
		new_user.save()
		page = Page()
		page.title = "Page title";
		page.content = "Page content";
		page.owner = new_user

		page.save()

		count_before = Page.objects.all().count()
		self.client.get('/wiki/delete/' + str(page.id))
		count_after = Page.objects.all().count()

		self.assertEqual(count_before, count_after)

	def test_cant_access_someone_elses_page(self):
		new_user = User.objects.create(username = 'pesho')
		new_user.set_password('parola')
		new_user.save()
		page = Page()
		page.title = "Page title";
		page.content = "Page content";
		page.owner = new_user

		page.save()

		res = self.client.get('/wiki/' + str(page.id))
		self.assertEquals(404, res.status_code)

	def test_get_absolute_url_for_page(self):
		page = Page()
		page.title = "Page title";
		page.content = "Page content";
		page.owner_id = 1

		page.save()

		self.assertEquals(page.get_absolute_url(), "/wiki/" + str(page.id))