let color = "purple";
let number = 10;
let word = "cool";

if (color === "purple") {
	$('.earth').css('background', color);
}
let text = "";
if (number >= 100) {
	text = `whoah, that's a big number.`;
} else {
	text = `just a regular number, please.`;
}
$('.wind').text(text);

text = "Power of DOM";
if (word === "cool") {
	$('.fire').text(text);
} else {
	$('.water').text(text);
}

$('#hover').hover(function () {
	$('.wind').toggleClass('east');
	$('.fire').toggleClass('south');
	$('.water').toggleClass('west');
});

	