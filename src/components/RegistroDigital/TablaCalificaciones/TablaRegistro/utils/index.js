import CONSTANTES from '../../../../../constantes';
import CompletivaRow from './CompletivaRow';
import ParcialRow from './ParcialRow';
import ExtraordinariaRow from './ExtraordinariaRow';
import TecnicaRow from './TecnicaRow';
import AsistenciaRow from './AsistenciaRow';
import CapRow from './CapRow';
import SituacionFinalRow from './SituacionFinalRow';

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

		case CONSTANTES.TABLA_TYPE.SITUACIONFINAL:
			return new SituacionFinalRow();

		case CONSTANTES.TABLA_TYPE.CAP:
			return new CapRow();

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

		case CONSTANTES.TABLA_TYPE.CAP:
			return CONSTANTES.CAP_COLUMNS;

		case CONSTANTES.TABLA_TYPE.SITUACIONFINAL:
			return CONSTANTES.SITUACION_FINAL_COLUMNS;

		default:
			return {};
	}
};

//Funcion que actualiza el promedio de las notas al modificarse un
//valor de la fila.

//FIXME: a esto se le puede hacer refactoring para no repetir tanto codigo

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

let updateExtraordinarioRows = (id, data, pcp) => {
	let promedio = 0;
	for (var row of data) {
		if (row.id === id) {
			row.setentaPorCientoCPEX = Math.round(row.CPEX * 0.7);
			row.treintaPorCientoPCP = Math.round(pcp * 0.3);

			for (const prop in row) {
				if (prop !== 'calificacionFinal' && prop !== 'id' && prop !== 'CPEX') {
					promedio += parseInt(row[prop], 10);
				}
			}
			row.calificacionFinal = promedio;
		}
	}

	return data;
};

//TODO: En caso de necesitar actualizar los datos de estas filas, hasta el momento no.
let updateSituacionFinalRows = (id, data) => {
	return data;
};

let updateAsistenciaRows = (id, data) => {
	return data;
};

let updateCAPRows = (id, data) => {
	return data;
};

let updateCompletivoRows = (id, data, pcp) => {
	let promedio = 0;
	for (var row of data) {
		if (row.id === id) {
			row.cincuentaPorCientoCPC = Math.round(row.CPC * 0.5);
			row.cincuetaPorCientoPCP = Math.round(pcp * 0.5);

			for (const prop in row) {
				if (prop !== 'calificacionFinal' && prop !== 'id' && prop !== 'CPC') {
					promedio += parseInt(row[prop], 10);
				}
			}
			row.calificacionFinal = promedio;
		}
	}

	return data;
};

let updateTecnicaRows = (id, data) => {
	let promedio = 0;
	for (var row of data) {
		if (row.id === id) {
			for (const prop in row) {
				if (prop !== 'calificacionFinal' && prop !== 'id') {
					let valor = parseInt(row[prop], 10);
					if (valor > 0) {
						promedio += valor;
					}
				}
			}
			row.calificacionFinal = promedio;
		}
	}

	return data;
};

let updateRow = (type, idRow, oldData, carry) => {
	switch (type) {
		case CONSTANTES.TABLA_TYPE.PARCIAL:
			return updateParcialRows(idRow, oldData);

		case CONSTANTES.TABLA_TYPE.TECNICA:
			return updateTecnicaRows(idRow, oldData);

		case CONSTANTES.TABLA_TYPE.EXTRAORDINARIA:
			return updateExtraordinarioRows(idRow, oldData, carry);

		case CONSTANTES.TABLA_TYPE.COMPLETIVA:
			return updateCompletivoRows(idRow, oldData, carry);

		case CONSTANTES.TABLA_TYPE.ASISTENCIA:
			return updateAsistenciaRows(idRow, oldData);

		case CONSTANTES.TABLA_TYPE.SITUACIONFINAL:
			return updateSituacionFinalRows(idRow, oldData);

		case CONSTANTES.TABLA_TYPE.CAP:
			return updateCAPRows(idRow, oldData);
		default:
			return { oldData };
	}
};

export { getNewRow, getNewColumns, updateRow };
