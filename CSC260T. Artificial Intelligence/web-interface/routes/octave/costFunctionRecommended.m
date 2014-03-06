function [J, grad] = costFunctionRecommended(theta, venue_features, user_ratings, rated_venues)

J = 0;
grad = zeros(size(theta));

m = size(venue_features, 1);

J = ( 1 / (2 * m)) * sum (((venue_features * theta) .* rated_venues - user_ratings) .^ 2);
grad = (1 / m) * (venue_features' * ((venue_features * theta) - user_ratings));

end