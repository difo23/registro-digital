import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import FechaAsistencia from './FechaAsistencia';
import {ASISTENCIA, COLUMNS_ASISTENCIA} from '../../constantes';


class AsistenciaLis extends React.Component {

    cellEdit = cellEditFactory({
        mode: 'click'
    });

    constructor(props){
        super(props)

        this.state = {
                rows: ASISTENCIA,
                columns: COLUMNS_ASISTENCIA 
        }

        this.addRow = this.addRow.bind(this);
        //this.remRow = this.remRow.bind(this);
    }

    addRow= ()=>{

        let newId = this.state.asistencias.length+1;
        let newRow = {
            
                id: newId,
                estado: 'P',
        }

        let newData = this.state.asistencias;
        newData.push(newRow);  
        this.setState({asistencias: newData})
        
    }

    remRow= ()=>{
        let newData = this.state.rows; 
        let removeRow =  newData.pop();
        this.setState({rows: newData})
        
    }


render(){
    return (
    <div>

        <div className="container" style={{ marginTop: 20 }}>
            <h3><strong>Fecha:</strong></h3><FechaAsistencia/>
            <BootstrapTable
                striped
                hover
                cellEdit={ this.cellEdit }
                keyField='id'
                data={ this.state.rows }
                columns={ this.state.columns } />
                <div>
                <button type="button" className="btn-lg btn-primary " onClick={this.addRow}>+</button>
                <button type="button" className="btn-lg btn-danger ">-</button>
                <button type="button" className="btn-lg btn-success ">Guardar</button>
                 </div>
                </div>       
            </div>
        );
    }
};


export default AsistenciaLis;