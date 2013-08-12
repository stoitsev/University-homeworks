<a data-role="button" data-inline="true" id="showAllFriendsButton">< Back</a>
<h2>Add Friends</h2>

<form id="addFriend">
	<p>
		<label for="name" class="ui-input-text">Username:</label>
			<p id="friend_name_error_container" class="error_container"></p>
			<input type="text" 
				   name="friend_name" 
				   id="friend_name" 
				   placeholder="Friend's username"
				   value="" 
				   class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset">
	</p>
	<p>
		<input type="submit" value="Add" />
	</p>
</form>