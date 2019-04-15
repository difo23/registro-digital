import React, { Component } from 'react';
//import logo from './feyalegrialogovector.png';
import './App.css';
import RegistroDigital from './components/RegistroDigital';

//import { Grid, Row, Col } from 'react-bootstrap';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	connecToServer = () => {
		fetch('/');
	};

	componentDidMount() {
		this.connecToServer();
	}

	render() {
		return (
			<div className="App">
				<div>
					<RegistroDigital />
				</div>
			</div>
		);
	}
}

export default App;
