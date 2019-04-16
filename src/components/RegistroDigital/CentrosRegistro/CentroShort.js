import React, { Component } from 'react';
import { CardImg, CustomInput, Row, Col } from 'reactstrap';

import { Button, ButtonGroup } from 'reactstrap';
import logo from './logo.png';

// ALGUNAS IMFORMACIONES DE PARTE DEL CREADOR DEL CODIGO  JERLY

// EL CIDIGO ESTA UN POCO COMENTADO
// EL CARD DEL CEMAS VIENE POR DEFECTO
// LA IMAGEN  DEL LOGO ESTA MUY PIXELADA, SE CAMBIARA LUEGO SOLO ERA PARA PROVAR
// NO ME ESFORSE  DARLE EL ESTILO
// NO TIENE FUCIONALIDAD TODAVIA
// LE FALTA COLOCARLE EL ESTILO, YA QUE HAY QUE ESPERAR QUE LO DEMAS DESARROLLADORES DEL APP TERMINEN PAR ELEGIR  EL ESTILO QUE TENDRA LA APP COMPLETA COMO EL COLOR ECT...
// SE NECESITAN HACER UNOS CUANTOS AJUSTES DE POCISIONAMIENTO
// CREE UN ARCHIVO TODOS.JSON PARA SIMULAR LOS DATOS QUE BIENEN POR DEFECTO  DEL CEMAS
// SI NO ENTIENDEN ALGO DEL CODIGO LE PREGUNTAN A JERLY QUE FUE QUIEN LO DESARROLLO

// ESA SON LAS IMFORMACIONES

class CentroShort extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: {
				siglas: 'CEMAS',
				correo: 'cemas.db@gmail.com',
				telefono: 'xxx-xxx-xxxx',
				tipoCentro: 'Politecnico',
				nombreCentro: 'Centro Educativo Mnuel Acevedo Serrano Fe y Alegria',
				distritiCentro: '05'
			}
		};
	}
	render() {
		// AQUI SE COMIENZA A CREAR EL CARD DEL  CEMAS

		return (
			<div className="container">
				<h2>Centros Educativos Registrados </h2>
				<div className="mt-6">
					<div className="card  mt-4">
						<div className="card-header">{this.state.info.nombreCentro}</div>
						<div className=" card-body">
							<Row>
								<Col sm="12" md={{ size: 6, offset: 3 }}>
									<CardImg src={logo} alt="Card image cap" />
									<CustomInput
										type="switch"
										id="exampleCustomSwitch"
										name="customSwitch"
										label="Active"
									/>
								</Col>
							</Row>
						</div>
						{/*AQUI SE LE LLAMAN A LOS DATOS QUE SE ENCUENTRAN EN EL ARCHIVO TODO.JSON */}
						<div className="card-body">
							<p>{this.state.info.siglas}</p>
							<p>{this.state.info.telefono}</p>
							<p>{this.state.info.correo}</p>
							<p>{this.state.info.tipoCentro}</p>
							<p>{this.state.info.distritiCentro}</p>
						</div>

						<div className="card-fooder, btn-light">
							<ButtonGroup>
								<Button color="primary" size="lg">
									Show
								</Button>
								<Button color="danger" size="lg">
									Edit
								</Button>
								<Button color="success" size="lg">
									Delete
								</Button>
							</ButtonGroup>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CentroShort;
