import React from 'react';
import {render} from 'react-dom';

import Menu from './components/menu.jsx';
import MainContent from './content/MainContent.jsx';

require('./styles/scss/style.scss');

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Menu />	
				<MainContent/>
			</div>
		);
	}
}