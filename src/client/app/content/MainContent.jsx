import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

import Slide from '../components/slide.jsx';

import Slide0 from '../slides/slide0Start.jsx';
import Slide1 from '../slides/slide1Projects.jsx';
import Slide2 from '../slides/slide2Contact.jsx';

import styles from '../styles/index.js';


configureAnchors({offset: 0, scrollDuration: 200})

export default class MainContent extends React.Component {
	render() {
		return (
			<div>
				<ScrollableAnchor id={'section1'}>
					<Slide bg={styles.slide0}>	
						<Slide0 />
					</Slide>
				</ScrollableAnchor>
				<ScrollableAnchor id={'section2'}>
					<Slide bg={styles.slide1}>  
						<Slide1 />
					</Slide>
				</ScrollableAnchor>
				<ScrollableAnchor id={'section3'}>
					<Slide bg={styles.slide2}>  
						<Slide2 />
					</Slide>
				</ScrollableAnchor>
			</div>
		);
	}
}