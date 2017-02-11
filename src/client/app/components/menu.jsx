import React from 'react';
import ReactDOM from 'react-dom';

import ButtonsLang from './buttonsLang.jsx';


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
			<nav id="main-nav">
				<div className="wrapper">
					<a href="#section1">Main</a>
					<a href="#section2">Project</a>
					<a href="#section3">Contact</a>
					{/*<li><ButtonsLang onClick={(e) => this.changeLangText(e, "Deutsch","English")}>{this.state.lang}</ButtonsLang></li>*/}
				</div>
			</nav>
		);
	}
};