import React, { Component, Fragment } from 'react';
import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider';
import Services from '../components/Services/Services';
import WhyUs from '../components/WhyUs/WhyUs';
import PopularBarberGrid from '../components/PopularBarbers/PopularBarberGrid';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/Common/ScrollToTop';

class Homepage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Fragment>
				<Header />
				<Slider />
				<Services />
				<WhyUs />
				<PopularBarberGrid />
				<Footer />
				<ScrollToTop />
			</Fragment>
		);
	}
}

export default Homepage;
