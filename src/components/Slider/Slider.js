import React from 'react';
import SlideConfig from '../../config/Slider';
import Slide from '../Slider/Slide';

const Slider = () => {
	return (
		<section className="slider_section">
			<ul id="main-slider" className="owl-carousel main_slider">
				{SlideConfig.slides.map((slide, index) => <Slide slide={slide} key={index} />)}
			</ul>
		</section>
	);
};

export default Slider;
