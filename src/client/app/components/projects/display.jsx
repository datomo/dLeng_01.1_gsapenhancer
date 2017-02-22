import React from 'react';


export default class Display extends React.Component {
	render() {
		return (
			<img src={this.props.imgLink} alt="" className="img-display"/>
		)
	}
}