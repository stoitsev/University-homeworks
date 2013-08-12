$(document).ready(function() {

	var timeOver = false;

	var audioElement = document.createElement('audio');
	audioElement.setAttribute('src', '/static/js/oddbounce.ogg');
	audioElement.load();

	$('.start-pomodoro').click(function(){
		$('.pomodoro-etry').first().css('background-color', '#ccc');

		if($(this).hasClass('test'))
			var time = 0.1;
		else
			var time = 25;

		startTimer(time * 60);
	});


	var markDone = function() {
		timeOver = true;
		
		audioElement.play();

		var element = $('.pomodoro-etry').first();
		var id = element.data('id');

		element.remove();

		$.get('/pomodoro/done/' + id);
	};

	var startTimer = function(time) {
		var timer = $('#pomodoro-countdown');

		if (timer.length != 0) {

			var timeOut = new Date();
			timeOut.setSeconds(timeOut.getSeconds() + time);

			if (timeOver) {
				timer.countdown('change', {
					until: timeOut, 
					format: 'MS', 
					compact: true, 
					description: '',
					onExpiry: markDone
				});
			} else  {
				timer.countdown({
					until: timeOut, 
					format: 'MS', 
					compact: true, 
					description: '',
					onExpiry: markDone
				});
			}
		}
	};

});