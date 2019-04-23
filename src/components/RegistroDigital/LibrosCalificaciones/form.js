import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Formulario extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		
		
		return (
			<div>
				<div>
					<div>
						<h2>Registrar libro de calificaciones y Asistencias</h2>
					</div>
					<Form>
						<FormGroup>
							<Label className="pop" for="exampleNivel" />
							<Input type="nivel" name="nivel" id="exampleNivel" placeholder="Nivel" />
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="examplePeridoEscolar" />
							<Input type="perido Escolar" name="perido Escolar" id="examplePeridoEscolar" placeholder="perido Escolar" />
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="exampleTitular" />
							<Input type="titular" name="titular" id="exampleTitular" placeholder="Titular" />
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="exampleModalidad" />
							<Input type="modalidad" name="modalidad" id="exampleModalidad" placeholder="Modalidad" />
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="exampleGrado" />
							<Input type="grado" name="grado" id="exampleGrado" placeholder="Grado" />
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="exampleSeccion" />
							<Input type="seccion" name="seccion" id="exampleSeccion" placeholder="Seccion" />
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="exampleTanda" />
							<Input type="select" name="horario" id="exampleTanda" >
							<option>Tanda</option>
								<option>Vespertina</option>
								<option>Matutina</option>
								<option>Tanda extendida</option>
							</Input>
						</FormGroup>
						

						<FormGroup>
							<Label class="rounded-circle" for="exampleObservaciones" />
							<Input type="textarea" name="text" id="exampleObservaciones" placeholder="OBSERVACIONES" />
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="exampleName" />
							<Input type="search" name="search" id="exampleSearch" placeholder="Search" />
						</FormGroup>

						<FormGroup>
							<Label className="pop" for="exampleTime" />
							<Input type="date" name="fecha" id="exampleTime" placeholder="Fecha de Creacion" />
						</FormGroup>
					</Form>
				</div>
				<div>
				<Button color="secondary" size="sm">Reporte</Button>
					
				</div>
				<br/>
				<div  >
				<Button outline color="primary" className="rounded-circle">
						Registrar
					</Button>
				</div>
			</div>
		);
	}
}

export default Formulario;
