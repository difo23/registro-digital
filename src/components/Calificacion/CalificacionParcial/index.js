import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const calificaciones = [{
    id: 1,
    primerTrimestre: 80,
    segundoTrimestre: 80,
    tercerBimestre: 80,
    cuartoTrimestre: 80,
    calificacionFinal:80
} , {
    id: 2,
    primerTrimestre: 80,
    segundoTrimestre: 80,
    tercerBimestre: 80,
    cuartoTrimestre: 80,
    calificacionFinal:80
} ];



const columns = [{
    dataField: 'id',
    text: 'Numero:'
},  {
    dataField: 'primerTrimestre',
    text: 'AGO-SEPT-OCT'
}, {
    dataField: 'segundoTrimestre',
    text: 'NOV-DIC-ENE'
}, {
    dataField: 'tercerBimestre',
    text: 'FEB-MAR'
}, {
    dataField: 'cuartoTrimestre',
    text: 'FEB-MAR'
}, {
    dataField: 'calificacionFinal',
    text: 'C.F'
}];
const CalificacionParcial = (props) => {
    return (

        <div className="container" style={{ marginTop: 20 }}>
            <BootstrapTable
                striped
                hover
                keyField='id'
                data={ calificaciones }
                columns={ columns } />
        </div>
    );
};
export default CalificacionParcial;
