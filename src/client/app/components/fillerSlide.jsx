import React from 'react';

export default class FillerSlide extends React.Component{
	render() {
		return (
			<div id={this.props.id} className="filler">
				<p></p>
			</div>
		)
	}
}