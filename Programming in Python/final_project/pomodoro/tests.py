from django.test import TestCase
from django.contrib.auth.models import User
from django.test.client import Client

from pomodoro.models import Pomodoro

class PomodoroModelTest(TestCase):
	def setUp(self):
		self.user, is_new = User.objects.get_or_create(username = 'pacitu')
		if is_new:
			self.user.set_password('parola')
			self.user.save()
		self.client = Client().post('/accounts/login/', {'username': 'pacitu', 'password': 'parola'}).client

	def test_creating_a_new_model_pomodoro_and_saving_it_to_the_database(self):
		pomodoro = Pomodoro()
		pomodoro.text = "Pomodoro todo";
		pomodoro.owner = self.user

		pomodoro.save()

		all_pomodoros = Pomodoro.objects.all()
		self.assertEquals(len(all_pomodoros), 1)

		only_pomodoro_in_database = all_pomodoros[0]
		self.assertEquals(only_pomodoro_in_database, pomodoro)

		self.assertEquals(only_pomodoro_in_database.text, "Pomodoro todo")
		self.assertEquals(only_pomodoro_in_database.owner_id, self.user.id)

	def test_create_new_pomodoro_via_request(self):
		text = "New todo"
		res = self.client.post('/pomodoro/create', {'text': text})

		self.assertEquals(302, res.status_code)

		res = self.client.get('/pomodoro/')
		self.assertTrue(text in res.content)

	def test_update_pomodoro_via_request(self):
		pomodoro = Pomodoro()
		pomodoro.text = "Pomodoro todo";
		pomodoro.owner = self.user

		pomodoro.save()

		text = "New todo"
		res = self.client.post('/pomodoro/update/' + str(pomodoro.id), {'text': text})

		self.assertEquals(302, res.status_code)

		res = self.client.get('/pomodoro/')
		self.assertTrue(text in res.content)

	def test_delete_pomodoro(self):
		pomodoro = Pomodoro()
		pomodoro.text = "Pomodoro todo";
		pomodoro.owner = self.user

		pomodoro.save()

		res = self.client.get('/pomodoro/')
		self.assertTrue("Pomodoro todo" in res.content)

		res = self.client.get('/pomodoro/delete/' + str(pomodoro.id))
		self.assertEquals(200, res.status_code)

		res = self.client.get('/pomodoro/all')
		self.assertFalse("Pomodoro todo" in res.content)

		res = self.client.get('/pomodoro/history')
		self.assertFalse("Pomodoro todo" in res.content)

	def test_done_pomodoro(self):
		pomodoro = Pomodoro()
		pomodoro.text = "Pomodoro todo";
		pomodoro.owner = self.user

		pomodoro.save()

		res = self.client.get('/pomodoro/')
		self.assertTrue("Pomodoro todo" in res.content)

		res = self.client.get('/pomodoro/done/' + str(pomodoro.id))
		self.assertEquals(302, res.status_code)

		res = self.client.get('/pomodoro/all')
		self.assertFalse("Pomodoro todo" in res.content)

		res = self.client.get('/pomodoro/history')
		self.assertTrue("Pomodoro todo" in res.content)

	def test_cant_done_someone_elses_pomodoro(self):
		new_user = User.objects.create(username = 'pesho')
		new_user.set_password('parola')
		new_user.save()

		pomodoro = Pomodoro()
		pomodoro.text = "Pomodoro todo";
		pomodoro.owner = new_user

		pomodoro.save()

		count_before = Pomodoro.objects.filter(completed = False).count()
		res = self.client.get('/pomodoro/done/' + str(pomodoro.id))
		count_after = Pomodoro.objects.filter(completed = False).count()

		self.assertEqual(count_before, count_after)
		
	def test_cant_delete_someone_elses_pomodoro(self):
		new_user = User.objects.create(username = 'pesho')
		new_user.set_password('parola')
		new_user.save()

		pomodoro = Pomodoro()
		pomodoro.text = "Pomodoro todo";
		pomodoro.owner = new_user

		pomodoro.save()

		count_before = Pomodoro.objects.filter(completed = False).count()
		res = self.client.get('/pomodoro/delete/' + str(pomodoro.id))
		count_after = Pomodoro.objects.filter(completed = False).count()

		self.assertEqual(count_before, count_after)

	def test_cant_update_someone_elses_pomodoro(self):
		new_user = User.objects.create(username = 'pesho')
		new_user.set_password('parola')
		new_user.save()

		pomodoro = Pomodoro()
		pomodoro.text = "Pomodoro todo";
		pomodoro.owner = new_user

		pomodoro.save()

		text = "New todo"
		res = self.client.post('/pomodoro/update/' + str(pomodoro.id), {'text': text})
		self.assertEquals(404, res.status_code)

		new_pomodoro = Pomodoro.objects.filter(id=pomodoro.id)[0];

		self.assertEqual(new_pomodoro.text, "Pomodoro todo")