import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

import Slide from '../components/slide.jsx';

import Slide0 from '../slides/slide0Start.jsx';
import Slide1 from '../slides/slide1Projects.jsx';
import Slide2 from '../slides/slide2Contact.jsx';

import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';


configureAnchors({offset: 0, scrollDuration: 200})
var controller = new ScrollMagic.Controller();

export default class MainContent extends React.Component {
	render() {
		return (
			<div>
				<ScrollableAnchor id={'section1'}>
					<Slide id="slide01">	
						<Slide0 />
					</Slide>
				</ScrollableAnchor>
				<ScrollableAnchor id={'section2'} >
					<Slide id="slide02" controller={controller}>  
						<Slide1 />
					</Slide>
				</ScrollableAnchor>
				<ScrollableAnchor id={'section3'}>
					<Slide id="slide03" container="true" controller={controller}>  
						<Slide2 />
					</Slide>
				</ScrollableAnchor>
			</div>
		);
	}
}