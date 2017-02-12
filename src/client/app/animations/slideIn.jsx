import react from 'react';

function slideIn (Component) {
	return class SlideIn extends React.Component {
		componentDidMount() {
		/*this.animStart = this.addAnimation(animStart)*/
		let el = document.getElementById(this.props.idElement)
		let tween = TweenMax.from(el, 0.5, {left: -300})
		
		var scene = new ScrollMagic.Scene({
									triggerElement: document.getElementById(this.props.idTrigger)
								})
								.setTween(tween)
								.addIndicators()
								.addTo(controller);
		}

		render(	) {
			return <Component ref="child" {...this.props} />;
		}
	}
}