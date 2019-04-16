import React, { Component } from 'react';
import { CardImg, CustomInput, Row, Col, } from 'reactstrap';
import { todos } from './todos.json';
import Button from './components/Button';
import logo from  './logo.jpeg';

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
			todos
		};
	}
	render() {
		// AQUI SE COMIENZA A CREAR EL CARD DEL  CEMAS
		const todos = this.state.todos.map((todo) =>{
			return (
				<div className="card  mt-4">
                  <div  className="card-header">
				    {todo.nombreCentro}
				  </div>
				<div className=" card-body" >
				  <Row>
                      <Col sm="12" md={{ size: 6, offset: 3 }}>
				         <CardImg  src={logo} alt="Card image cap"  /> 
				          <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Active" />
		              </Col>
                    </Row>
				  </div>
                  {/*AQUI SE LE LLAMAN A LOS DATOS QUE SE ENCUENTRAN EN EL ARCHIVO TODO.JSON */}
				  <div className="card-body">
				  <p>{todo.siglas}</p>
				  <p>{todo.correo}</p>
				  <p>{todo.telefono}</p>
				  <p>{todo.tipoCentro}</p>
				  <p>{todo.distritiCentro}</p>
				  </div>

				  <div className="card-fooder, btn-light"  >
			        <Button></Button>
				  </div>
				</div>
			)
		})
		return (
			<div className="container">
               <h2>Centros Educativos Registrados </h2>
				  <div className="mt-6">
				  	{todos}
				  </div>
			
				</div>
		);
	}
}

export default CentroShort;
