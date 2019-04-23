import React, { Component } from 'react';
import { CardImg, CustomInput, Row, Col } from 'reactstrap';
import PaginationCentro from './PaginationCentro';
import { Button, ButtonGroup } from 'reactstrap';
import logo from './logo.jpeg';

// ALGUNAS IMFORMACIONES DE PARTE DEL CREADOR DEL CODIGO  JERLY

// EL CIDIGO ESTA UN POCO COMENTADO
// EL CARD DEL CEMAS VIENE POR DEFECTO
// LA IMAGEN  DEL LOGO ESTA MUY PIXELADA, SE CAMBIARA LUEGO SOLO ERA PARA PROVAR
// NO ME ESFORSE  DARLE EL ESTILO
// NO TIENE FUCIONALIDAD TODAVIA
// LE FALTA COLOCARLE EL ESTILO, YA QUE HAY QUE ESPERAR QUE LO DEMAS DESARROLLADORES DEL APP TERMINEN PAR ELEGIR  EL ESTILO QUE TENDRA LA APP COMPLETA COMO EL COLOR ECT...
// SE NECESITAN HACER UNOS CUANTOS AJUSTES DE POCISIONAMIENTO
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
							<p>{this.state.info.siglas}</p>
							<p>{this.state.info.telefono}</p>
							<p>{this.state.info.correo}</p>
							<p>{this.state.info.tipoCentro}</p>
							<p>{this.state.info.distritiCentro}</p>
						</div>

						<div className="card-fooder">
							<ButtonGroup>
								<Button color="primary" href="/libros" size="lg">
									Libros
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
							<PaginationCentro />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CentroShort;
