import React, { Component } from 'react';
import { CardImg, CustomInput, Row, Col } from 'reactstrap';
import PaginationLibro from './paginationLibro';
import { Button, ButtonGroup } from 'reactstrap';
import cemas from './cemas.jpg';
import {prueba} from './prueba.json';

class Carta extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prueba
		};
		this.handleAddTodo= this.handleAddTodo.bind(this);
	}
	handleAddTodo(todo){
		this.setState({
		prueba:	[...this.setState.prueba,todo]

		})

	}
	render() {
		

		return (
			<div className="container">
				<h2>{this.state.prueba.libro} </h2>
				<div className="mt-6">
					<div className="card  mt-4">
						<div className="card-header">{this.state.prueba.libro}</div>
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

							{this.state.prueba.ListaDeEstudiantes}
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
							{this.state.prueba.ListaDeAsignaturas}
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

export default Carta;
