$(document).ready(function() {
	console.log('jquery ready...');

	console.log(riddles.length);
	console.log(colors.length);

	$('section span a').click(function() {
		console.log('click');
		if ($(this).attr('data-answer') != null) {
			var riddle, color;
			
			riddle = getRandomInt(0, riddles.length-1);
			color = getRandomInt(1, colors.length-2);

			console.log('riddle: ' + riddles.length);
			console.log('color:  ' + colors.length);

			console.log('ok');
			newRiddle(riddle, color);
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
		$(itm).addClass(colors[use].name);

		if (icon == riddles[riddle].answer) {
			$(itm).attr('data-answer', 'correct');
			$(itm).addClass('correct');
		}
		$(itm).addClass('icon-' + icon);

		use++;
	});
}

// Returns a random integer between min and max
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}