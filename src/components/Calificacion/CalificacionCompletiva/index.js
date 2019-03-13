import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

const calificaciones = [{
    id: 1,
    cincuetaPorCientoPCP: 42,
    CPC: 80,
    cincuentaPorCientoCPC: 42,
    calificacionFinal: 84

} , {
    id: 2,
    cincuetaPorCientoPCP: 42,
    CPC: 80,
    cincuentaPorCientoCPC: 42,
    calificacionFinal: 84
} ];



const columns = [{
    dataField: 'id',
    text: 'Numero:',
    filter: textFilter()
    
},  {
    dataField: 'cincuetaPorCientoPCP',
    text: '50% P.C.P:'
}, {
    dataField: 'CPC',
    text: 'C.P.C:'
}, {
    dataField: 'cincuentaPorCientoCPC',
    text: '50% C.P.C:'
}, {
    dataField: 'calificacionFinal',
    text: 'C.C:'
}];
const CalificacionCompletiva = (props) => {

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
                data={ calificaciones }
                filter={ filterFactory() }
                columns={ columns } />

<div>
                <button type="button" class="btn-lg btn-primary ">+</button>
                <button type="button" class="btn-lg btn-danger ">-</button>
                <button type="button" class="btn-lg btn-success ">Guardar</button>
                 </div>
        </div>
    );
};
export default CalificacionCompletiva;