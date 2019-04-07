import React from 'react';
import CONSTANTES from '../../constantes';
import { getAsignaturaOptions, getProfesorOptions } from './TablaCalificaciones/Selectores/utils/util';
import TablaAcademica from './TablaCalificaciones/TablaAcademica';

class RegistroDigital extends React.Component {
	constructor(props) {
		super(props);

		let asignaturaOptions = getAsignaturaOptions(0);
		let profesorOptions = getProfesorOptions(0);
		this.state = {
			modalidad: 0,
			asignatura_options: asignaturaOptions,
			profesor_options: profesorOptions,
			periodo: '-',
			centro: '-',
			grado: '-',
			seccion: '-',
			asignatura: '-',
			profesor: '-'
		};

		//funciones para updates
		this.onProfesorChange = this.onProfesorChange.bind(this);
		this.onGradoChange = this.onGradoChange.bind(this);
		this.onSeccionChange = this.onSeccionChange.bind(this);
		this.onModalidadChange = this.onModalidadChange.bind(this);
		this.onAsignaturaChange = this.onAsignaturaChange.bind(this);
		this.onCentroChange = this.onCentroChange.bind(this);
		this.onPeriodoChange = this.onPeriodoChange.bind(this);
	}

	onGradoChange(element) {
		console.log(CONSTANTES.GRADO_OPTIONS[element]);
	}

	onSeccionChange(element) {
		console.log(CONSTANTES.SECCION_OPTIONS[element]);
	}

	onModalidadChange(element, modalidad) {
		console.log(CONSTANTES.MODALIDAD_OPTIONS[element], element);
		let newAsiganaturaOptions = getAsignaturaOptions(element);
		let newProfesorOptions = getProfesorOptions(element);

		this.setState({
			modalidad: element,
			asignatura_options: newAsiganaturaOptions,
			profesor_options: newProfesorOptions
		});
		console.log(newAsiganaturaOptions);
		console.log(newProfesorOptions);
		// this.render()
	}

	onAsignaturaChange(element) {
		console.log(CONSTANTES.ASIGNATURA_GENERAL_OPTIONS[element]);
		let newAsignatura = CONSTANTES.ASIGNATURA_GENERAL_OPTIONS[element];
		this.setState({ asignatura: newAsignatura });
	}

	onProfesorChange(element) {
		console.log(this.state.profesor_options[element]);
		let newProfesor = this.state.profesor_options[element];

		//TODO: Seguir actualizando los estados para cada campo
		this.setState({
			profesor: newProfesor
		});
	}

	onCentroChange(element) {
		console.log(CONSTANTES.CENTRO_EDUCATIVO_OPTIONS[element]);
	}
	onPeriodoChange(element) {
		console.log(CONSTANTES.PERIODO_ESCOLAR_OPTIONS[element]);
	}

	render() {
		return (
			<div className={'RegistroDigital'}>
				<TablaAcademica />
			</div>
		);
	}
}

export default RegistroDigital;
