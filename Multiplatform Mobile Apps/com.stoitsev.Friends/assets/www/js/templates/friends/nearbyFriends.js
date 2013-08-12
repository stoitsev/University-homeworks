<h2>Nearby friends</h2>

<ul data-role="listview" data-filter="true" data-filter-placeholder="Search people..." data-filter-theme="d"data-theme="d" data-divider-theme="d">
	<% if(friends) { %>
		<% _.each( friends, function(friend){ %>
			<li><a><%- friend %></a></li>
		<% }); %>
	<% } %>
</ul>
