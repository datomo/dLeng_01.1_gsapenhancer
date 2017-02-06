import React from 'react';
import {render} from 'react-dom';

import Menu from './components/menu.jsx';
import MainContent from './content/MainContent.jsx';

import Styles from './styles/style.scss';

class App extends React.Component {
	render() {
		return (
			<div>
				<Menu />	
				<MainContent/>
			</div>
		);
	}
}

const app = document.getElementById('app');
render( <App/>, app);
