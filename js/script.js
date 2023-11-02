'use strict';

//!burger----------

const burger = document.querySelector('.burger'),
	close = document.querySelectorAll('.close'),
	nav = document.querySelector('.header__nav'),
	body = document.querySelector('body'),
	overaly = document.querySelector('.header__overlay'),
	menuItem = document.querySelectorAll('.header__link'),
	wrapper = document.querySelector('.wrapper'),
	header = document.querySelector('.header');

let keys = {
	ESC: 27
};


burger.addEventListener('click', () => {
	nav.classList.add('header__nav--active');
	body.classList.add('js-scroll');
	overaly.style.display = 'block';

	Array.from(wrapper.children).forEach((child) => {
		if (child !== header) {
			child.inert = true;
		}
	});
	nav.inert = false;
})

function closeActive() {
	nav.classList.remove('header__nav--active');
	body.classList.remove('js-scroll');
	overaly.style.display = 'none';
	modal.classList.add('none')
	document.body.style.overflow = '';

	Array.from(wrapper.children).forEach((child) => {
		if (child !== header) {
			child.inert = false;
		}
	});

	Array.from(main.children).forEach((child) => {
		if (child !== modal) {
			child.inert = false;
		}
	});
	modal.inert = true;
}

menuItem.forEach((e) => {
	e.addEventListener('click', () => {
		closeActive()
	})
});

close.forEach(e => {
	e.addEventListener('click', () => {
		closeActive()
	})
});

overaly.addEventListener('click', () => {
	closeActive()
})

document.addEventListener('keydown', (e) => {
	if (e.code === 'Escape') {
		closeActive()
	}
});




//!modal----------

const logIn = document.querySelector('.header__login'),
	modal = document.querySelector('.modal'),
	main = document.querySelector('.main');


logIn.addEventListener('click', () => {
	modal.classList.remove('none')
	document.body.style.overflow = 'hidden';
	Array.from(main.children).forEach((child) => {
		if (child !== modal) {
			child.inert = true;
		}
	});
	modal.inert = false;
});

modal.addEventListener('click', (e) => {
	const target = e.target;
	if (target && target.classList.contains('modal')) {
		modal.classList.add('none')
		document.body.style.overflow = '';
		Array.from(main.children).forEach((child) => {
			if (child !== modal) {
				child.inert = false;
			}
		});
		modal.inert = true;
	}
});

document.addEventListener('keydown', (e) => {
	if (e.code === 'Escape') {
		Array.from(main.children).forEach((child) => {
			if (child !== modal) {
				child.inert = false;
			}
		});
		modal.inert = true;
	}
});

//!scroll----------

$(window).scroll(function () {
	if ($(this).scrollTop() > 950) {
		$('.pageup').fadeIn(300);
	} else {
		$('.pageup').fadeOut(300);
	}
});

$("a[href^='#']").click(function () {
	const _href = $(this).attr("href");
	$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
	return false;
});

//!tabs----------


$('ul.teach__tabs').on('click', 'li:not(.teach__tab--active)', function () {
	$(this)
		.addClass('teach__tab--active').siblings().removeClass('teach__tab--active')
		.closest('div.container').find('ul.cards').removeClass('cards__active').eq($(this).index()).addClass('cards__active');
});

//!swiper----------

const team = new Swiper('.team__slider', {
	spaceBetween: 30,
	navigation: {
		nextEl: '.team-swiper-next',
		prevEl: '.team-swiper-prev',
	},
	breakpoints: {
		250: {
			slidesPerView: 1,
		},
		450: {
			slidesPerView: 2,
		},
		650: {
			slidesPerView: 3,
		},
		900: {
			slidesPerView: 4,
		},
	}
});

//!swiper2----------


const testimonials = new Swiper('.testimonials__slider', {
	spaceBetween: 30,
	slidesPerView: 1,
	navigation: {
		nextEl: '.slider-testimonials-next',
		prevEl: '.slider-testimonials-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
});

//!accordion----------


const btn = document.querySelectorAll('[data-name="accordeon-title"]');

btn.forEach((i) => {
	i.addEventListener('click', function () {
		console.log('hello')
		this.nextElementSibling.classList.toggle('hidden');
		this.classList.toggle('active')
	});
	i.addEventListener('keydown', function (e) {
		if (e.code === 'Digit1') {
			this.nextElementSibling.classList.toggle('hidden');
			this.classList.toggle('active')
		}
	});
});




//!disabled-btn----------

const checkBox = document.querySelector('.js-check'),
	send = document.querySelector('.questions__btn');

checkBox.addEventListener('click', () => {
	if (checkBox.checked) {
		send.removeAttribute('disabled');
	} else {
		send.setAttribute('disabled', 'disabled');
	}
});

//!phone-mask----------

const telSelector = document.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7(999)999-99-99');
inputMask.mask(telSelector);