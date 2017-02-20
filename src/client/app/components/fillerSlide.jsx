import React from 'react';


export default class FillerSlide extends React.Component{
	
	render() {
		const fillerStyling = {
			backgroundColor: "black",
			height: 100
		};
		return (
			<div id={this.props.id} class="filler" style={fillerStyling}>
				<p>hallo</p>
			</div>
		)
	}
}