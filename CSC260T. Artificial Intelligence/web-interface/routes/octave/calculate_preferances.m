%clear console
clear ; close all; clc

%add current functions
addpath(pwd);

fprintf('Start calculating user preferences\n');

% ratings = load('user_ratings.txt');
ratings = input('Enter user rating');
ratings = ratings';

rated_venues = input('Enter which venues the user voted for');
rated_venues = rated_venues';

venue_features = load('routes/octave/venue_features.txt');
venue_features = [ones(length(venue_features), 1) venue_features];

initial_theta = zeros(size(venue_features, 2), 1);

%  Set options for fminunc
options = optimset('GradObj', 'on', 'MaxIter', 2000);

[theta, cost] = ...
	fminunc(@(t)(costFunctionRecommended(t, venue_features, ratings, rated_venues)), initial_theta, options);

best_theta = theta;
best_cost = cost;

for i = 1:50
	initial_theta = rand((size(venue_features, 2)), 1) .* 5;
	[theta, cost] = ...
		fminunc(@(t)(costFunctionRecommended(t, venue_features, ratings, rated_venues)), initial_theta, options);
	
	if cost < best_cost
		best_theta = theta;
		best_cost = cost;
	end
end
	
scores = venue_features * best_theta;

% csvwrite('scores.txt', scores');
disp("!#!")
disp(scores)