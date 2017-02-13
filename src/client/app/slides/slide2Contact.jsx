import React from 'react';
import ReactDOM from 'react-dom';

import Github from '../svgs/github.jsx';



export default class Slide2 extends React.Component {
	componentDidMount() {

	}
	render() {
		return (
				<div>
					<h1 id="title-slide02" className="display-1 animation">Contact</h1>
					<div className="contactBox">
						<div className="contactSvg" id="contactLeft">
							<Github />
						</div>
						<div className="contactSvg" id="contactCenter">
							
						</div>
						<div className="contactSvg" id="contactRight">
							
						</div>
					</div>
				</div>
		);
	}
};

