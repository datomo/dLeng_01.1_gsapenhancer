import React from 'react';
import ReactDOM from 'react-dom';

import Github from '../svgs/github.jsx';
import Codepen from '../svgs/codepen.jsx';
import Mail from '../svgs/mail.jsx';



export default class Slide2 extends React.Component {
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {

	}
	openLink(test) {
		return function () {
     		// you code 
     		location.href = test
  		}
		
	}
	render() {
		return (
				<div>
					<h1 id="title-slide02" className="display-1 animation">Contact</h1>
					<div className="contactBox">
						<Github id="contactLeft" className="contactSvg" onClick={this.openLink("https://github.com/datomo")}/>

						<Codepen id="contactCenter" className="contactSvg" onClick={this.openLink("https://codepen.io/Datomo/")}/>
		
						<Mail id="contactRight" className="contactSvg" onClick={this.openLink("mailto:request@d-leng.com?Subject=request")}/>
					</div>
				</div>
		);
	}
};

