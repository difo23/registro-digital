import React, { Component } from 'react';
import { CardImg, CustomInput, Row, Col } from 'reactstrap';
import PaginationLibro from './paginationLibro';
import { Button, ButtonGroup } from 'reactstrap';
import cemas from './cemas.jpg';

class CentroShort extends Component {
	constructor(props) {
		super(props);
		this.state = {
			datos: {
				libro: '1A',
				ListaDeEstudiantes: 'Lista de Estudiantes',
				ListaDeAsignaturas: ' Lista de Asignaturas'
			}
		};
	}
	render() {
		// AQUI SE COMIENZA A CREAR EL CARD DEL  CEMAS

		return (
			<div className="container">
				<h2>Manuel Acevedo Serrano </h2>
				<div className="mt-6">
					<div className="card  mt-4">
						<div className="card-header">{this.state.datos.libro}</div>
						<div className=" card-body">
							<Row>
								<Col sm="12" md={{ size: 6, offset: 3 }}>
									<CardImg src={cemas} alt="Card image cap" />
									<CustomInput
										type="switch"
										id="CustomSwitch"
										name="customSwitchCentro"
										label="Active"
										valid={true}
										checked={true}
									/>
								</Col>
							</Row>
						</div>

						<div className="card-body">
							<ButtonGroup>
								<Button href="/asignaturas">Asignaturas</Button>
								<Button href="/EstudiantesRegistro">Estudiantes</Button>
								<Button>Editar</Button>
								<Button>Eliminar</Button>
							</ButtonGroup>
							<hr />

							{this.state.datos.ListaDeEstudiantes}
							<hr />
							<PaginationLibro />
							<ButtonGroup>
								<Button color="primary" href="#" size="lg">
									Reporte
								</Button>
								<Button color="danger" size="lg">
									Editar
								</Button>
								<Button color="success" size="lg">
									Borrar
								</Button>
							</ButtonGroup>
						</div>

						<div className="card-fooder">
							<hr />
							{this.state.datos.ListaDeAsignaturas}
							<br />
							<hr />

							<ButtonGroup>
								<Button color="primary" href="#" size="lg">
									Reporte
								</Button>
								<Button color="danger" size="lg">
									Editar
								</Button>
								<Button color="success" size="lg">
									Borrar
								</Button>
							</ButtonGroup>
						</div>
						<br />
						<div>
							<PaginationLibro />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CentroShort;
