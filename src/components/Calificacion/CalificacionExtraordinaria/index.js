import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';


const calificaciones = [{
    id: 1,
    treintaPorCientoPCP: 25,
    CPEX: 80,
    setentaPorCientoCPEX: 70,
    calificacionFinal: 95

} , {
    id: 2,
    treintaPorCientoPCP: 25,
    CPEX: 80,
    setentaPorCientoCPEX: 70,
    calificacionFinal: 95
} ];



const columns = [{
    dataField: 'id',
    text: 'Numero:'
},  {
    dataField: 'treintaPorCientoPCP',
    text: '30% P.C.P:'
}, {
    dataField: 'CPEX',
    text: 'C.P.EX:'
}, {
    dataField: 'setentaPorCientoCPEX',
    text: '70% C.P.EX:'
}, {
    dataField: 'calificacionFinal',
    text: 'C.EX:'
}];
const CalificacionExtraordinaria = (props) => {

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
                columns={ columns } />

<div>
                <button type="button" class="btn-lg btn-primary ">+</button>
                <button type="button" class="btn-lg btn-danger ">-</button>
                <button type="button" class="btn-lg btn-success ">Guardar</button>
                 </div>
        </div>
    );
};
export default CalificacionExtraordinaria;