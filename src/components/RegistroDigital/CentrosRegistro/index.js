import React, { Component } from 'react';
import Formulario from './Formulario';
import PaginationCentro from './PaginationCentro';
import { Container, Row, Col } from 'reactstrap';
import CentroShort from './CentroShort';

class Centro extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Container>
				<Row>
					<Col xs="6" className="block">
						<Formulario />
						<br />
						<PaginationCentro />
					</Col>

					<Col xs="6" className="blockShort">
						<CentroShort />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Centro;
