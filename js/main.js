var $ = jQuery.noConflict();

// numeric input

document.addEventListener('click', function (e) {
	if (e.target.classList.contains("increase")) {
		++e.target.parentElement.querySelector("input").value;
	} else if (e.target.classList.contains("decrease")) {
		--e.target.parentElement.querySelector("input").value;
	}
});

// slider video reviews

$(document).ready(function () {
	$('#vd_slider').slick({
		dots: true,
		infinite: true,
		speed: 1200,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: $('#vd_prev'),
		nextArrow: $('#vd_next'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
});

// acordion

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
	const itemToggle = this.getAttribute('aria-expanded');

	for (i = 0; i < items.length; i++) {
		items[i].setAttribute('aria-expanded', 'false');
	}

	if (itemToggle == 'false') {
		this.setAttribute('aria-expanded', 'true');
	}
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


// MODAL !!!!
let popup = document.querySelector('.modal');
let popupOverlay = document.querySelector('.modal-overlay');
let popupOpenBtn = document.querySelectorAll('.open-btn');
let popupClose = document.querySelector('.close-btn');
let body = document.querySelector('html');

popupOpenBtn.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		popup.classList.add('open');
		body.classList.add('overflow');
	})
});

popupClose.addEventListener('click', () => {
	popup.classList.remove('open');
	body.classList.remove('overflow');
});

document.addEventListener('click', (e) => {
	if (e.target === popupOverlay) {
		popup.classList.remove('open');
		body.classList.remove('overflow');
	}
});


// END script

// burger

$('.burger, .overlay').click(function () {
	$('.burger').toggleClass('clicked');
	$('.overlay').toggleClass('show');
	$('.navburger').toggleClass('show');
	$('html').toggleClass('overflow');
});