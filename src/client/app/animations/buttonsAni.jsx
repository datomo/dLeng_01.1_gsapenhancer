import React from 'react';
import ReactDOM from 'react-dom';

import GSAPEnh from 'react-gsap-enhancer';
import GSAP from 'gsap';

class ButtonsAni extends React.Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<div>
				{this.props.children}
			</div>
			
		)
	}
};

const GSAPWrapped = GSAPEnh(ButtonsAni)
export default GSAPWrapped;