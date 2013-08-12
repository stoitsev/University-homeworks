<form action="#" method="post" id="login_form">
		<h2>Login</h2>

		<p>Log in and start using the app now!</p>
		
		<div data-role="fieldcontain" class="ui-hide-label ui-field-contain ui-body ui-br">
			<label for="name" class="ui-input-text">Username:</label>
			<p id="username_error_container" class="error_container"></p>
			<input type="text" 
				   name="username_login" 
				   id="username_login" 
				   placeholder="Username"
				   value="" 
				   class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset">
		</div>	

		<div data-role="fieldcontain" class="ui-hide-label ui-field-contain ui-body ui-br">
			<label for="name" class="ui-input-text">Password:</label>
			<p id="password_error_container" class="error_container"></p>
			<input type="password" 
				   name="password_login" 
				   id="password_login" 
				   placeholder="Password"
				   value="" 
				   class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset">
		</div>	

		<p>
			<input type="submit" value="Sign In" />
		</p>

		<p>
			<a href="#register" >Registration</a>
		</p>
</form>