$(document).ready(function() {
	console.log('jquery ready...');

	var all = riddles.length;
	console.log(all);

	$('section span a').click(function() {
		console.log('click');
		if ($(this).attr('data-answer') != null) {
			var riddle = getRandomInt(0, all-1);
			console.log('ok');
			newRiddle(riddle);
		}
		return false;
	});	
});

var newRiddle = function(riddle) {

	$('h1').text(riddles[riddle].question);

	var icons = $('span > a');
	
	$.each(icons, function(idx, itm) {
		if ($(itm).attr('data-answer')) {
			$(itm).attr('data-answer', null);
		}
	});

	$.each(icons, function(idx, itm) {
		var icon = riddles[riddle].icons[idx];
		
		$(itm).attr('class', '');

		if (icon == riddles[riddle].answer) {
			$(itm).attr('data-answer', 'correct');
			$(itm).addClass('correct');
		}
		$(itm).addClass('icon-' + icon);
	});
}

// Returns a random integer between min and max
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}