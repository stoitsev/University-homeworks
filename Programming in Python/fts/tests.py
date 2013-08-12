from django.test import LiveServerTestCase
from selenium import webdriver

class BasicNavigationTest(LiveServerTestCase):
    
    def setUp(self):
        self.browser = webdriver.Firefox()
        
    def tearDown(self):
        self.browser.quit()
        
    def can_open_index(self):
        self.browser.get(self.live_server_url)
        
        body = self.browser.find_element_by_tag_name('body')
        
        self.assertIn("It worked!", body.text)
