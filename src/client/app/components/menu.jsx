import React from 'react';
import ReactDOM from 'react-dom';

import ButtonsLang from './buttonsLang.jsx';

import styles from '../styles/index.js';

export default class Menu extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			lang: "Deutsch"
		}

		this.changeLangText = this.changeLangText.bind(this);
	}
	changeLangText(e) {
		const lang = this.state.lang;
		if(lang == "Deutsch") {
			return this.setState({lang:"English"})
		} else {
			return this.setState({lang:"Deutsch"})

		}
	}

	render() {
		return (
			<div style={styles.greyBg} className="fixed-top">
				<div className="container">
					<nav className="navbar navbar-inverse">
						<div className="row">
							<a className="navbar-brand col-2" href="#section1">Main</a>
							<a className="navbar-brand col-2" href="#section2">Project</a>
							<a className="navbar-brand col-2" href="#section3">Contact</a>
							<ButtonsLang onClick={this.changeLangText}>{this.state.lang}</ButtonsLang>
						</div>
					</nav>
				</div>
			</div>
		);
	}
};