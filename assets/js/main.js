const $sliders = document.querySelectorAll('.slider')
const $prev = document.querySelectorAll('.prev')
const $next = document.querySelectorAll('.next')

const nextSlide = () => {
	let posSlider = undefined

	$sliders.forEach((slider, i) => {
		if (slider.classList.contains('active')) {
			slider.classList.remove('active')
			posSlider = i

			if (posSlider === $sliders.length - 1) {
				posSlider = -1
			}
		}
	})

	$sliders[posSlider + 1].classList.add('active')
}

const prevSlide = () => {
	let posSlider = undefined

	$sliders.forEach((slider, i) => {
		if (slider.classList.contains('active')) {
			slider.classList.remove('active')
			posSlider = i

			if (posSlider === 0) {
				posSlider = $sliders.length
			}
		}
	})

	$sliders[posSlider - 1].classList.add('active')
}

$next.forEach((element) => {
	element.addEventListener('click', nextSlide)
})
$prev.forEach((element) => {
	element.addEventListener('click', prevSlide)
})
