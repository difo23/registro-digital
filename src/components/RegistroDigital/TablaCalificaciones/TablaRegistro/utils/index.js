import CONSTANTES from '../../../../../constantes';
import CompletivaRow from './CompletivaRow';
import ParcialRow from './ParcialRow';
import ExtraordinariaRow from './ExtraordinariaRow';
import TecnicaRow from './TecnicaRow';
import AsistenciaRow from './AsistenciaRow';

let getNewRow = (type, id) => {
	switch (type) {
		case CONSTANTES.TABLA_TYPE.PARCIAL:
			return new ParcialRow();

		case CONSTANTES.TABLA_TYPE.TECNICA:
			return new TecnicaRow();

		case CONSTANTES.TABLA_TYPE.EXTRAORDINARIA:
			return new ExtraordinariaRow();

		case CONSTANTES.TABLA_TYPE.COMPLETIVA:
			return new CompletivaRow();

		case CONSTANTES.TABLA_TYPE.ASISTENCIA:
			return new AsistenciaRow();

		default:
			return {};
	}
};

let getNewColumns = (type) => {
	switch (type) {
		case CONSTANTES.TABLA_TYPE.PARCIAL:
			return CONSTANTES.PARCIAL_COLUMNS;

		case CONSTANTES.TABLA_TYPE.TECNICA:
			return CONSTANTES.TECNICA_COLUMNS;

		case CONSTANTES.TABLA_TYPE.EXTRAORDINARIA:
			return CONSTANTES.EXTRAORDINARIA_COLUMNS;

		case CONSTANTES.TABLA_TYPE.COMPLETIVA:
			return CONSTANTES.COMPLETIVA_COLUMNS;

		case CONSTANTES.TABLA_TYPE.ASISTENCIA:
			return CONSTANTES.ASISTENCIA_COLUMNS;

		default:
			return {};
	}
};

//Funcion que actualiza el promedio de las notas parciales al modificarse un
//valor de la fila.

let updateParcialRows = (id, data) => {
	let promedio = 0;
	for (var row of data) {
		if (row.id === id) {
			for (const prop in row) {
				if (prop !== 'calificacionFinal' && prop !== 'id') {
					promedio += parseInt(row[prop], 10);
				}
			}
			promedio = Math.round(promedio / 4);
			row.calificacionFinal = promedio;
		}
	}

	return data;
};

let updateRow = (type, idRow, oldData) => {
	switch (type) {
		case CONSTANTES.TABLA_TYPE.PARCIAL:
			return updateParcialRows(idRow, oldData);

		case CONSTANTES.TABLA_TYPE.TECNICA:
			return CONSTANTES.TECNICA_COLUMNS;

		case CONSTANTES.TABLA_TYPE.EXTRAORDINARIA:
			return CONSTANTES.EXTRAORDINARIA_COLUMNS;

		case CONSTANTES.TABLA_TYPE.COMPLETIVA:
			return CONSTANTES.COMPLETIVA_COLUMNS;

		case CONSTANTES.TABLA_TYPE.ASISTENCIA:
			return CONSTANTES.ASISTENCIA_COLUMNS;

		default:
			return {};
	}
};

export { getNewRow, getNewColumns, updateRow };
