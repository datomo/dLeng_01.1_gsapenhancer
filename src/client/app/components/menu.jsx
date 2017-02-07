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
	changeLangText(e, lang_1, lang_2) {
		const lang = this.state.lang;
		if(lang == lang_1) {
			return this.setState({lang:lang_2})
		} else {
			return this.setState({lang:lang_1})

		}
	}

	render() {
		return (
			<div style={styles.greyBg} className="fixed-top navbar navbar-inverse">
				<div className="container">
					<nav className="">
						<div className="row">
							<a className="navbar-brand col-2" href="#section1">Main</a>
							<a className="navbar-brand col-2" href="#section2">Project</a>
							<a className="navbar-brand col-2" href="#section3">Contact</a>
							<ButtonsLang onClick={(e) => this.changeLangText(e, "Deutsch","English")}>{this.state.lang}</ButtonsLang>
						</div>
					</nav>
				</div>
			</div>
		);
	}
};