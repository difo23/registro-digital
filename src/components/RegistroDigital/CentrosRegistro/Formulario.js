import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Formulario extends React.Component {
	render() {
		return (
			<div>
				<div>
					<div>
						<h2>Registrar Centro Educativo</h2>
					</div>
					<Form>
						<FormGroup>
							<Label className="pop" for="exampleName" />
							<Input type="nombre" name="nombre" id="exampleCentro" placeholder="Nombre del Centro" />
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="exampleSiglas" />
							<Input type="siglas" name="siglas" id="exampleSiglas" placeholder="Siglas" />
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="exampleEmail" />
							<Input type="email" name="email" id="exampleEmail" placeholder="Correo" />
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="exampleTelefono" />
							<Input type="number" name="telefono" id="exampleTelefono" placeholder="Telefono" />
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="exampleCentro" />
							<Input type="centro" name="centro" id="exampleCentro" placeholder="Tipo de Centro" />
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="examplePassword" />
							<Input type="password" name="password" id="examplePassword" placeholder="Contraseña" />
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="exampleZona" />
							<Input type="zona" name="zona" id="exampleZona" placeholder="Zona donde esta el centro" />
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="exampleDistrito" />
							<Input
								type="distrito"
								name="distrito"
								id="exampleDistrito"
								placeholder="Distrito donde se encuentra el centro"
							/>
						</FormGroup>

						<FormGroup>
							<Label className="pop" for="exampleRegional">
								{' '}
							</Label>
							<Input
								type="regional"
								name="regional"
								id="exampleRegional"
								placeholder="Regional a la que pertenece el centro"
							/>
						</FormGroup>

						<FormGroup>
							<Label className="pop" for="exampleModalidad" />
							<Input type="select" name="Modalidad" id="exampleModalidad">
								<option>...</option>
								<option>Informatica</option>
								<option>Electricidad</option>
								<option>Contabilidad</option>
								<option>Gastronomia</option>
								<option>Mercadeo</option>
							</Input>
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="exampleTanda" />
							<Input type="select" name="horario" id="exampleTanda">
								<option>Vespertina</option>
								<option>Matutina</option>
								<option>Tanda extendida</option>
							</Input>
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="exampleTime" />
							<Input type="date" name="fecha" id="exampleTime" placeholder="Fecha de Creacion" />
						</FormGroup>
						<FormGroup>
							<Label class="rounded-circle" for="exampleObservaciones" />
							<Input type="textarea" name="text" id="exampleObservaciones" placeholder="OBSERVACIONES" />
						</FormGroup>
					</Form>
				</div>
				<div>
					<Button outline color="primary">
						Registrar
					</Button>
				</div>
			</div>
		);
	}
}

export default Formulario;
