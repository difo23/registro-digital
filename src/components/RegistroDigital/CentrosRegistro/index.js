import React, { Component } from 'react';
import Formulario from './Formulario';
import PaginationCentro from './PaginationCentro';
import { Container, Row, Col } from 'reactstrap';
import CentroShort from './CentroShort';
	


class Centro extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	render() {
		return (
			<Container>
				<Row >
					<Col xs="6" className="block"  >
						<Formulario />
						<br />
						
					</Col>

					<Col xs="16" className="">		
						<CentroShort />
						
					</Col>
				</Row>
			{/* CAMBIE LA POCISION DE LA NAVEGACION DE DONDE ESTA ANTES AHORA SE ENCUENTRA AQUI  */}
				<Row className=" m-5">
                  <Col sm="12" md={{ size: 8, offset: 4 }} >
				      <PaginationCentro />
		          </Col>
               </Row>
			</Container>
		);
	}
}

export default Centro;
