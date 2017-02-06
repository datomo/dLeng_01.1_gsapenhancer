import React from 'react';
import ReactDOM from 'react-dom';

import styles from '../styles/index.js';

export default class Slide extends React.Component {
	render() {
		return (
			<div className="slide" style={this.props.bg}>
				<div className="container">
					<div style={styles.placeMenu}></div>
					{this.props.children}
				</div>
			</div>
		);
	}
};