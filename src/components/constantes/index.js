import { textFilter } from 'react-bootstrap-table2-filter';


const TITULO_CLASSNAME= 'EstudentLabel';
const TITULO_TEXT='Registro Academico:';

var CALIFICACIONES_ACADE = [{
    id: 1,
    primerTrimestre: 0,
    segundoTrimestre: 0,
    tercerBimestre: 0,
    cuartoTrimestre: 0,
    calificacionFinal:0
}  ];



const COLUMNS_ACADEM = [{
    dataField: 'id',
    text: '',
    filter: textFilter() // apply text filter
},  {
    dataField: 'primerTrimestre',
    text: 'AGO-SEPT-OCT:'
}, {
    dataField: 'segundoTrimestre',
    text: 'NOV-DIC-ENE:'
}, {
    dataField: 'tercerBimestre',
    text: 'FEB-MAR:'
}, {
    dataField: 'cuartoTrimestre',
    text: 'ABR-MAY-JUN:'
}, {
    dataField: 'calificacionFinal',
    text: 'C.F:'
}];


const ASISTENCIA = [{
    id: 1,
    estado: 'P',
   
} ];



const COLUMNS_ASISTENCIA = [{
    dataField: 'id',
    text: 'Numero:'
},  {
    dataField: 'estado',
    text: 'Estado (P, T, E, A):'
}, {
    dataField: 'observaciones',
    text: 'Observaciones:'
}

];



export {TITULO_CLASSNAME,TITULO_TEXT, CALIFICACIONES_ACADE, COLUMNS_ACADEM, ASISTENCIA, COLUMNS_ASISTENCIA};