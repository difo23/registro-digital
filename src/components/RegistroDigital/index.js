import React from 'react';
import TablaAcademica from './TablaCalificaciones/TablaAcademica';
import TablaTecnico from './TablaCalificaciones/TablaTecnico';
import NavBarRegistro from '../NavBarRegistro';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Asignatura from './AsignaturaMaestroRegistro';
import Centro from './CentrosRegistro';
import Estudiante from './EstudiantesRegistro';
import Libro from './LibrosCalificaciones';

class RegistroDigital extends React.Component {
	constructor(props) {
		super(props);
		//funciones para updates
	}

	Bienvenido(params) {
		return <h1>Bienvenido</h1>;
	}

	render() {
		return (
			<div>
				<header className="App-header">
					<NavBarRegistro />
				</header>
				<Router>
					<div className={'RegistroDigital'}>
						{/* <TablaAcademica /> */}
						<Route exact path="/" component={this.Bienvenido} />
						<Route exact path="/centros" component={Centro} />
						<Route exact path="/libros" component={Libro} />
						<Route exact path="/estudiantes" component={Estudiante} />
						<Route exact path="/asignaturas" component={Asignatura} />
						<Route exact path="/califAcadem" component={TablaAcademica} />
						<Route exact path="/califTecn" component={TablaTecnico} />
					</div>
				</Router>
			</div>
		);
	}
}

export default RegistroDigital;
