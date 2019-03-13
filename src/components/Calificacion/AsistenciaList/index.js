import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import FechaAsistencia from './FechaAsistencia';


const calificaciones = [{
    id: 1,
    presente: 'P',
   
}, {
    id: 2,
    presente: 'E',
    
}, {
    id: 3,
    presente: 'A',
    
}, {
    id: 4,
    presente: 'T',
    
} ];



const columns = [{
    dataField: 'id',
    text: 'Numero:'
},  {
    dataField: 'presente',
    text: 'Estado:'
}, {
    dataField: 'observaciones',
    text: 'Observaciones:'
}

];
const CalificacionCompletiva = (props) => {

    const cellEdit = cellEditFactory({
        mode: 'click'
    });



    return (
    <div>

        <div className="container" style={{ marginTop: 20 }}>
            <h3><strong>Fecha:</strong></h3><FechaAsistencia/>
            <p>Marcar con x la situacion del estudiante.</p>
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
                
               
            </div>
    );
};
export default CalificacionCompletiva;