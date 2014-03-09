$(document).ready(function() {
	console.log('jquery ready...');

	console.log(riddles.length);
	console.log(colors.length);

	var processing = false;

	// init
	newRiddle(0, 5);

	$('section span a').click(function() {
		console.log('click');
		if (processing) {
			return false;
		}
		if ($(this).attr('data-answer') != null) {
			var riddle, color;

			processing = true;
			
			riddle = getRandomInt(0, riddles.length-1);
			color = getRandomInt(1, colors.length-2);

			console.log('riddle: ' + riddles.length);
			console.log('color:  ' + colors.length);

			console.log('ok');
			// hidding incorrect answers
			$('.incorrect').animate({'font-size': 0}, 1000);

			setTimeout(function() {
				$('.correct').hide();
			}, 1000);

			// new riddle with delay
			setTimeout(function() {
				newRiddle(riddle, color);
				processing = false;
			}, 1500);
		}
		return false;
	});	
});

var newRiddle = function(riddle, color) {

	$('h1').text(riddles[riddle].question);

	var icons = $('span > a');
	
	$.each(icons, function(idx, itm) {
		if ($(itm).attr('data-answer')) {
			$(itm).attr('data-answer', null);
		}
	});

	var use = color-1;

	$.each(icons, function(idx, itm) {
		var icon = riddles[riddle].icons[idx];
		
		$(itm).attr('class', '');
		$(itm).attr('style', null);
		$(itm).addClass(colors[use].name);

		if (icon == riddles[riddle].answer) {
			$(itm).attr('data-answer', 'correct');
			$(itm).addClass('correct');
		} else {
			$(itm).addClass('incorrect');
		}
		$(itm).addClass('icon-' + icon).animate({'font-size': '12em'}, 500);

		use++;
	});
}

// Returns a random integer between min and max
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}