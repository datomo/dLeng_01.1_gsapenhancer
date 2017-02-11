import React from 'react';
import ReactDOM from 'react-dom';

import GSAPEnh from 'react-gsap-enhancer';
import GSAP from 'gsap';



function animButton({target}) {
	const button = target.find({type: 'button'})
	return (
		new TimelineMax({paused: true})
			.add('start')
			.to(button, 1, {
	  	
	  		})
	  		.add('hovered')

	)
}

class Button extends React.Component {
	constructor(props) {
		super(props);


		this.state = {
			name: this.props.unpressedText//unpressedText
		};

		this.changeText = this.changeText.bind(this);
		this.setText = this.setText.bind(this);
		this.functionWrapper = this.functionWrapper.bind(this);
	}
	componentDidMount() {
		this.animButton = this.addAnimation(animButton)
	}


	changeText(e) {
		const name = this.state.name;
		if(name == this.props.unpressedText) {
			return this.setState({name: this.props.pressedText})
		} else {
			return this.setState({name: this.props.unpressedText})

		}
	}
	setText() {
		const name = this.state.name;
		return this.setState({name:this.props.unpressedText})
	}
	functionWrapper() {
		this.changeText() ; 
		this.props.onClick();
		this.addAnimation(animButton);
	}
	render() {
		return (
			<div>
				<button type="button" 
						onClick={this.functionWrapper} 
						onMouseEnter= {() => this.animButton.tweenTo('hovered')}
						onMouseLeave= {() => this.animButton.tweenTo('start')}
						className={this.props.className}>

					{this.state.name}
					{this.props.children}
				</button>
			</div>	
		)
	}
};

const GSAPWrapped = GSAPEnh(Button)
export default GSAPWrapped;