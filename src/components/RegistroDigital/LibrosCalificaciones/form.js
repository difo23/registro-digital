import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Formulario extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nivel: '',
			peridoEscolar: '',
			titular: '',
			modalidad: '',
			grado: '',
			seccion: '',
			tanda: '',
			fecha: '',
			search: ''
		};
		this.handleInput=this.handleInput.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}
handleInput(e){
const {value, name}	= e.target;

this.setState({
[name]:value


})
}
handleSubmit(e) {
	e.preventDefault();
	this.props.onAddTodo(this.setState);
	
}




	render() {
		
		
		return (

			<div>
				<div>
					<div>
						<h2>Registrar libro de calificaciones y Asistencias</h2>
					</div>
					<Form onSubmit={this.handleSubmit}>
						<FormGroup>
							<Label className="pop" for="exampleNivel" />
							<Input type="nivel" name="nivel" id="exampleNivel" placeholder="Nivel" onChange={this.handleInput} />
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="examplePeridoEscolar" />
							<Input type="perido Escolar" name="perido Escolar" id="examplePeridoEscolar" placeholder="perido Escolar" onChange={this.handleInput} />
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="exampleTitular" />
							<Input type="titular" name="titular" id="exampleTitular" placeholder="Titular" onChange={this.handleInput} />
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="exampleModalidad" />
							<Input type="modalidad" name="modalidad" id="exampleModalidad" placeholder="Modalidad" onChange={this.handleInput}/>
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="exampleGrado" />
							<Input type="grado" name="grado" id="exampleGrado" placeholder="Grado" onChange={this.handleInput} />
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="exampleSeccion" />
							<Input type="seccion" name="seccion" id="exampleSeccion" placeholder="Seccion" onChange={this.handleInput} />
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="exampleTanda" />
							<Input type="select" name="tanda" id="exampleTanda"  onChange={this.handleInput}>
							<option>Tanda</option>
								<option>Vespertina</option>
								<option>Matutina</option>
								<option>Tanda extendida</option>
							</Input>
						</FormGroup>
						

						<FormGroup>
							<Label class="rounded-circle" for="exampleObservaciones" />
							<Input type="textarea" name="text" id="exampleObservaciones" placeholder="OBSERVACIONES" onChange={this.handleInput}/>
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="exampleName" />
							<Input type="search" name="search" id="exampleSearch" placeholder="Search" onChange={this.handleInput} />
						</FormGroup>

						<FormGroup>
							<Label className="pop" for="exampleTime" />
							<Input type="date" name="fecha" id="exampleTime" placeholder="Fecha de Creacion" onChange={this.handleInput}/>
						</FormGroup>
					</Form>
				</div>
				<div>
				<Button className="btn btn-dark">Reporte</Button>
					
				</div>
				<br/>
				<div  >
				<Button className= "btn btn-danger"
				onClick={this.handleSubmit} >
				
						Registrar
					</Button>
				</div>
			</div>
		);
	}
}

export default Formulario;
