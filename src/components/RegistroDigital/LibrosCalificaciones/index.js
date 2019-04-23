import React, { Component } from 'react';
import Formulario from './form';
import { Container, Row, Col } from 'reactstrap';
import PaginationLibro from './paginationLibro';
import Carta  from './carta';
class Libro extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Container>
				<Row>
					<Col xs="6" className="block">
				<Formulario/>
						
						<br />
						<PaginationLibro/>
					</Col>

					<Col xs="6" className="">
						<Carta/>
					</Col>
				</Row>
				
			</Container>
			
			
			
				
				
							
		);
	}
}

export default Libro;
