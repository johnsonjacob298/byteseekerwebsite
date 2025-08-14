$(document).ready(function () {

	var x = 0;
	setInterval(function () {
		x -= 1;
		$('body').css('background-position', x + 'px 0');
	}, 17);

	$('span').hide();
	$('#bean').hide();

	$('#first').show();
	$("#first").animate({
		top : '200px',

	}, 500, function () {

		$('#second').show();
		$("#second").animate({
			top : '200px',

		}, 1000, function () {

			$('#third').show();
			$("#third").animate({

				top : '200px',

			}, 1500, function () {

				$('#for').animate({

					left : '21%'

				}, 1000);

			});

		});

	});

	$('#nf').fadeIn(5000);

});