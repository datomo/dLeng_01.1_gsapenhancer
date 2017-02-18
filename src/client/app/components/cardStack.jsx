import React from 'react';
import ReactDOM from 'react-dom';
import Card from './cards.jsx';

import GSAP from 'gsap';
import GSAPEnh from 'react-gsap-enhancer';

import Ref from '../data/images/refallschwil.jpg';
import Sprung from '../data/images/sprungbraett.jpg';
import Leng from '../data/images/dLeng.jpg';

const active= "clickable-active"
const passive= "clickable-passive"

const startText = "Click on one of the pictures to learn more about my past projects."
const longTextFull = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const infoTextLeft = "Refallschwil.ch was one of my first build websites. It uses a custom designed theme, which consists of mostly css-edist. Wordpress was used as a foundation cause it needed to integrate a plugin which grabbed the local database of clients."
const infoTextCenter = "My first walk attempts in using a javascript library, in this Prototype Gsap, and javascript itself. Build from scratch and mostly loaded with a lot of animations to showcase the potential. Dropped for this Portfolio in React, cause the code is a lot more updatable."
const infoTextRight = "Little temporary hub for a youth festival build on Joomla. Also used and edited a custom theme, but mostly changed the appearence of normal Joomla. It's design is the most optimzed till this stand."

class CardStack extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			infoText: startText,
			projectLink: "",
			classNameLeft: "clickable-passive",
			classNameCenter: "clickable-passive",
			classNameRight: "clickable-passive"
		}

		this.changeTextLeft= this.changeTextLeft.bind(this)
		this.changeTextCenter= this.changeTextCenter.bind(this)
		this.changeTextRight= this.changeTextRight.bind(this)
	}



	changeTextLeft(e) {
		this.setState({infoText: infoTextLeft})
		this.setState({classNameLeft: active, classNameCenter: passive, classNameRight: passive})
		this.setState({projectLink: "refallschwil.ch"})
	}

	changeTextCenter(e) {
		this.setState({infoText: infoTextCenter})
		this.setState({classNameCenter: active, classNameLeft: passive, classNameRight: passive})
		this.setState({projectLink: "d-Leng.com"})
	}

	changeTextRight(e) {
		this.setState({infoText: infoTextRight})
		this.setState({classNameRight: active, classNameLeft: passive, classNameCenter: passive})
		this.setState({projectLink: "sprungbraett-festival.ch"})
	}


	componentDidMount() {
	}
	render() {
		return (
			<div className="slide-cardStack">
				<div className="card-stack">
					<div className={this.state.classNameLeft} id="cardLeftId" onClick={this.changeTextLeft}>
						<Card className="cardNormal" id="cardLeft"  title="refallschwil.ch" imgLink={Ref}/>
					</div>
					<div className={this.state.classNameCenter} id="cardCenterId" onClick={this.changeTextCenter}>
						<Card className="cardNormal" id="cardCenter" title="Prototype Portfolio" imgLink={Leng}/>
					</div>
					<div className={this.state.classNameRight} id="cardRightId" onClick={this.changeTextRight}>
						<Card className="cardNormal" id="cardRight" title="sprungbraett-festival.ch" imgLink={Sprung}/>
					</div>
				</div>
				<div className="placeholder-10"></div>
				<div className="cardInfo info-container">
					<div className="text-container">
						<h3>Description:</h3>
						<p>
							{this.state.infoText}
						</p>
						<a href={"http://" + this.state.projectLink}>
							{this.state.projectLink}
						</a>
					</div>
				</div>
			</div>
		);
	}
};


const GSAPTest = GSAPEnh(CardStack)
export default GSAPTest;

