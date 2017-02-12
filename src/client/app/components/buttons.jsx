import React from 'react';
import ReactDOM from 'react-dom';


export default class Button extends React.Component {
	constructor(props) {
		super(props);


		this.state = {
			name: this.props.unpressedText//unpressedText
		};

		this.changeText = this.changeText.bind(this);
		this.setText = this.setText.bind(this);
		this.functionWrapper = this.functionWrapper.bind(this);
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
	}
	render() {
		return (
			<div>
				<button type="button" 
						onClick={this.functionWrapper} 
						className={this.props.className}>

					{this.state.name}
					{this.props.children}
				</button>
			</div>	
		)
	}
};
