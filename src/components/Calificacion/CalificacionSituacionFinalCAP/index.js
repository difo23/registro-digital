import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

const calificaciones = [{
    id: 1,
    A: 'x',
    R: '',
    oportunidadUno: 42,
    oportunidadDos: 84

} , {
    id: 2,
    A: 'x',
    R: '',
    oportunidadUno: 42,
    oportunidadDos: 84
} ];



const columns = [{
    dataField: 'id',
    filter: textFilter(),
    text: 'Numero:'
},  {
    dataField: 'A',
    text: 'Aprobado:'
}, {
    dataField: 'R',
    text: 'Reprobado:'
}, {
    dataField: 'OportunidadUno',
    text: 'Primera Oportunidad:'
}, {
    dataField: 'OportunidadDos',
    text: 'Segunda Oportunidad:'
}];
const CalificacionSituacionFinalCAP = (props) => {
    const cellEdit = cellEditFactory({
        mode: 'click'
    });
    return (

        <div className="container" style={{ marginTop: 20 }}>
            <BootstrapTable
                striped
                hover
                cellEdit={ cellEdit }
                keyField='id'
                filter={ filterFactory() }
                data={ calificaciones }
                columns={ columns } />
                 <div>
                <button type="button" class="btn-lg btn-primary ">+</button>
                <button type="button" class="btn-lg btn-danger ">-</button>
                <button type="button" class="btn-lg btn-success ">Guardar</button>
                 </div>
        </div>
    );
};
export default CalificacionSituacionFinalCAP;