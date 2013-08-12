<form action="#" method="post" id="registration_form">
		<h2>Registration</h2>

		<p>Crete new profile and start using the app!</p>
		
		<div data-role="fieldcontain" class="ui-hide-label ui-field-contain ui-body ui-br">
			<label for="name" class="ui-input-text">Username:</label>
			<p id="username_error_container" class="error_container"></p>
			<input type="text" 
				   name="username" 
				   id="username" 
				   placeholder="Username"
				   value="" 
				   class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset">
		</div>	

		<div data-role="fieldcontain" class="ui-hide-label ui-field-contain ui-body ui-br">
			<label for="name" class="ui-input-text">Password:</label>
			<p id="password_error_container" class="error_container"></p>
			<input type="password" 
				   name="password" 
				   id="password" 
				   placeholder="Password"
				   value="" 
				   class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset">
		</div>	

		<div data-role="fieldcontain" class="ui-hide-label ui-field-contain ui-body ui-br">
			<label for="name" class="ui-input-text">Password Again:</label>
			<p id="password_again_error_container" class="error_container"></p>
			<input type="password" 
				   name="password_again" 
				   id="password_again" 
				   placeholder="Password Again"
				   value="" 
				   class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset">
		</div>

		<p>
			<input type="submit" value="Sign Up" />
		</p>
</form>