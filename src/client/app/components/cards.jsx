import React from 'react';
import ReactDOM from 'react-dom';


export default class Card extends React.Component {
	render() {
		return (
				<div className="card">
    				<img className="card-img-top" src={"../data/images/sprungbraett.png"} alt="Card image cap" />
    				<div className="card-block">
				      <h4 className="card-title">Card title</h4>
				      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    				</div>
  				</div>
  		)
	}
};