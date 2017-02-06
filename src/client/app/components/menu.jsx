import React from 'react';
import ReactDOM from 'react-dom';

import styles from '../styles/index.js';

export default class Menu extends React.Component {
	render() {
		return (
			<div style={styles.greyBg} className="fixed-top">
				<div className="container">
					<nav className="navbar navbar-inverse">
						<div className="row">
							<a className="navbar-brand col-2" href="#section1">Main</a>
							<a className="navbar-brand col-2" href="#section2">Project</a>
							<a className="navbar-brand col-2" href="#section3">Contact</a>
						</div>
					</nav>
				</div>
			</div>
		);
	}
};