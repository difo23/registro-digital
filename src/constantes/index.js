import { textFilter } from 'react-bootstrap-table2-filter';

const TITULO_CLASSNAME = 'EstudentLabel';
const TITULO_TEXT = 'Registro Academico:';

const TABLA_TYPE = {
	PARCIAL: 0,
	COMPLETIVA: 1,
	EXTRAORDINARIA: 2,
	ASISTENCIA: 3,
	TECNICA: 4
};

const SELECTOR_TYPE = {
	GRADO: 0,
	SECCION: 1,
	MODALIDAD: 2,
	PROFESOR: 3,
	PERIODO_ESCOLAR: 4,
	CENTRO_EDUCATIVO: 5,
	ASIGNATURA: 6
};

const SELECTOR_TITLE = {
	GRADO: 'Grado',
	SECCION: 'Seccion',
	MODALIDAD: 'Modalidad',
	PROFESOR: 'Profesor',
	PERIODO_ESCOLAR: 'Periodo',
	CENTRO_EDUCATIVO: 'Centro',
	ASIGNATURA: 'Asignatura'
};

const GRADO_OPTIONS = [ '-', '1', '2', '3', '4', '5', '6' ];

const MODALIDAD_OPTIONS = [ '-', 'GENERAL', 'ELECTRICO', 'INFORMATICO', 'CONTABILIDAD', 'TURISMO', 'MERCADEO' ];

const MODALIDAD_SELECT_OPTIONS = {
	GENERAL: '1',
	TECNICO_ELECTR: '2',
	TECNICO_INF: '3',
	TECNICO_CONTA: '4',
	TECNICO_TURIS: '5',
	TECNICO_MER: '6'
};

const ASIGNATURA_GENERAL_OPTIONS = [
	'-',
	'MATEMATICAS',
	'ESPAÑOL',
	'SOCIALES',
	'QUIMICA',
	'FISICA',
	'BIOLOGIA',
	'INGLES'
];

const ASIGNATURA_TECNICO_ELECTR_OPTIONS = [ '-', 'PLC', 'CONTROLES', 'HIDRAULICA' ];

const ASIGNATURA_TECNICO_INF_OPTIONS = [ '-', 'BASE DE DATOS', 'DESARROLLO DE APLICACIONES', 'REDES', 'PAGINAS WEB' ];

const ASIGNATURA_TECNICO_CONTA_OPTIONS = [ '-', 'CONTABILIDAD' ];

const ASIGNATURA_TECNICO_TURIS_OPTIONS = [ '-', 'TURISMO' ];

const ASIGNATURA_TECNICO_MER_OPTIONS = [ '-', 'MERCADEO' ];

const SECCION_OPTIONS = [ '-', 'A', 'B', 'C', 'D', 'E', 'F', 'H' ];

const PROFESOR_GENERAL_OPTIONS = [ '-', 'Juan General', '', '', '', '', '' ];

const PROFESOR_TECNICO_ELECTR_OPTIONS = [ '-', 'Migel Electrico', '', '', '', '', '' ];

const PROFESOR_TECNICO_CONTA_OPTIONS = [ '-', 'Pedro Contabilidad', '', '', '', '', '' ];

const PROFESOR_TECNICO_TURIS_OPTIONS = [ '-', 'Juana Turismo', '', '', '', '', '' ];

const PROFESOR_TECNICO_MER_OPTIONS = [ '-', 'Maria Mercadeo', '', '', '', '', '' ];

const PROFESOR_TECNICO_INF_OPTIONS = [ '-', 'Maria Mercadeo', '', '', '', '', '' ];

const PERIODO_ESCOLAR_OPTIONS = [ '-', '2018-19', '', '', '', '', '' ];

const CENTRO_EDUCATIVO_OPTIONS = [ '-', 'CEMAS', '', '', '', '', '' ];

const PARCIAL_COLUMNS = [
	{
		dataField: 'id',
		text: '',
		filter: textFilter() // apply text filter
	},
	{
		dataField: 'primerTrimestre',
		text: 'AGO-SEPT-OCT:'
	},
	{
		dataField: 'segundoTrimestre',
		text: 'NOV-DIC-ENE:'
	},
	{
		dataField: 'tercerBimestre',
		text: 'FEB-MAR:'
	},
	{
		dataField: 'cuartoTrimestre',
		text: 'ABR-MAY-JUN:'
	},
	{
		dataField: 'calificacionFinal',
		text: 'C.F:',
		editable: false
	}
];

let TECNICA_COLUMNS = [
	{
		dataField: 'id',
		text: '',
		filter: textFilter() // apply text filter
	},
	{
		dataField: 'ra1',
		text: 'RA%:'
	},
	{
		dataField: 'ra2',
		text: 'RA%:'
	},
	{
		dataField: 'ra3',
		text: 'RA%:'
	},
	{
		dataField: 'ra4',
		text: 'RA%:'
	},
	{
		dataField: 'ra5',
		text: 'RA%:'
	},
	{
		dataField: 'ra6',
		text: 'RA%:'
	},
	{
		dataField: 'ra7',
		text: 'RA%:'
	},
	{
		dataField: 'ra8',
		text: 'RA%:'
	},
	{
		dataField: 'ra9',
		text: 'RA%:'
	},
	{
		dataField: 'ra10',
		text: 'RA%:'
	},
	{
		dataField: 'calificacionFinal',
		text: 'C.F:',
		editable: false
	}
];

const COMPLETIVA_COLUMNS = [
	{
		dataField: 'id',
		text: '',
		filter: textFilter()
	},
	{
		dataField: 'cincuetaPorCientoPCP',
		text: '50% P.C.P:',
		editable: false
	},
	{
		dataField: 'CPC',
		text: 'C.P.C:'
	},
	{
		dataField: 'cincuentaPorCientoCPC',
		text: '50% C.P.C:',
		editable: false
	},
	{
		dataField: 'calificacionFinal',
		text: 'C.C:',
		editable: false
	}
];

const EXTRAORDINARIA_COLUMNS = [
	{
		dataField: 'id',
		text: '',
		filter: textFilter()
	},
	{
		dataField: 'treintaPorCientoPCP',
		text: '30% P.C.P:',
		editable: false
	},
	{
		dataField: 'CPEX',
		text: 'C.P.EX:'
	},
	{
		dataField: 'setentaPorCientoCPEX',
		text: '70% C.P.EX:',
		editable: false
	},
	{
		dataField: 'calificacionFinal',
		text: 'C.EX:',
		editable: false
	}
];

const ASISTENCIA_COLUMNS = [
	{
		dataField: 'id',
		text: '',
		filter: textFilter()
	},
	{
		dataField: 'estado',
		text: 'Estado (P, T, E, A):'
	},
	{
		dataField: 'observaciones',
		text: 'Observaciones:'
	}
];

let CONSTANTES = {
	TITULO_CLASSNAME,
	TITULO_TEXT,
	TABLA_TYPE,
	SELECTOR_TYPE,
	SELECTOR_TITLE,
	GRADO_OPTIONS,
	MODALIDAD_OPTIONS,
	ASIGNATURA_GENERAL_OPTIONS,
	ASIGNATURA_TECNICO_ELECTR_OPTIONS,
	ASIGNATURA_TECNICO_INF_OPTIONS,
	ASIGNATURA_TECNICO_CONTA_OPTIONS,
	ASIGNATURA_TECNICO_TURIS_OPTIONS,
	ASIGNATURA_TECNICO_MER_OPTIONS,
	PROFESOR_GENERAL_OPTIONS,
	MODALIDAD_SELECT_OPTIONS,
	PROFESOR_TECNICO_ELECTR_OPTIONS,
	PROFESOR_TECNICO_CONTA_OPTIONS,
	PROFESOR_TECNICO_TURIS_OPTIONS,
	PROFESOR_TECNICO_MER_OPTIONS,
	PROFESOR_TECNICO_INF_OPTIONS,
	PERIODO_ESCOLAR_OPTIONS,
	CENTRO_EDUCATIVO_OPTIONS,
	SECCION_OPTIONS,
	PARCIAL_COLUMNS,
	TECNICA_COLUMNS,
	COMPLETIVA_COLUMNS,
	EXTRAORDINARIA_COLUMNS,
	ASISTENCIA_COLUMNS
};

export default CONSTANTES;
