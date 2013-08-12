<h2>Friends list</h2>
<% if ( friends.message ){ %>
	<p><%- friends.message %></p>
<% } %>

<a data-role="button" id="addfriendButton">
    Add Friend
</a>
<ul data-role="listview" data-filter="true" data-filter-placeholder="Search people..." data-filter-theme="d"data-theme="d" data-divider-theme="d">
	<% if(friends.list) { %>
		<% _.each( friends.list, function(friend){ %>
			<li><a href="#friend/<%- friend %>"><%- friend %></a></li>
		<% }); %>
	<% } %>
</ul>
