import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import React, { Component } from 'react';
import {CALIFICACIONES_ACADE, COLUMNS_ACADEM} from '../../constantes';


class CalificacionParcial extends Component {

    selectRow = {
        mode: 'checkbox',
        // selected: [1, 3] // should be a row keys array
    };

    constructor(props) {
        super(props);
        this.state = { rows: CALIFICACIONES_ACADE, columns: COLUMNS_ACADEM};

        this.addRow = this.addRow.bind(this);
        this.remRow = this.remRow.bind(this);
        this.updateFinalCalification = this.updateFinalCalification.bind(this);
    }

    addRow= ()=>{

        let newId = this.state.rows.length+1;
        let newRow = {
            id: newId,
            primerTrimestre: 0,
            segundoTrimestre: 0,
            tercerBimestre: 0,
            cuartoTrimestre: 0,
            calificacionFinal:0
        }
        let newData = this.state.rows;
        newData.push(newRow);  
        this.setState({rows: newData})
        
    }

    remRow= ()=>{
        let newData = this.state.rows; 
        let removeRow =  newData.pop();
        console.log(removeRow)
        console.log(newData)
        this.setState({rows: newData})
        
    }


    updateFinalCalification (idRow) {
        let promedio = 0;
        let newCalificaciones = this.state.rows;

        for (var row of newCalificaciones){
            if (row.id === idRow){
                for (const prop in row){
                    if (prop !== "calificacionFinal" && prop !== "id" ){
                        promedio += parseInt(row[prop], 10); 
    
                    }
                }
                promedio = Math.round(promedio/4);
                row.calificacionFinal = promedio;        
            }
        }
        return newCalificaciones;
    }   


    cellEdit = cellEditFactory({
        mode: 'click',
    
        beforeSaveCell: (oldValue, newValue, row, column) => {
            console.log("beforeSaveCell old value: ", oldValue);
            console.log("beforeSaveCellNew value: ", newValue);
            console.log("beforeSaveCell Row: ", row);
            console.log("beforeSaveCell Column: ",column);
        },
    
        validator: (newValue, row, column) => {
           
            return true;
        },
    
        afterSaveCell: (oldValue, newValue, row, column) => {
            let newData = this.updateFinalCalification(row.id);
            this.setState({
                rows: newData
            })
            console.log("Estado actualizado", this.state);
    
        }
    
    });

   

    render (){
        return(  
            <div className="container" style={{ marginTop: 10 }}>
                <BootstrapTable
                    striped
                    hover
                    selectRow={ this.selectRow }
                    cellEdit={ this.cellEdit }
                        
                    keyField='id'
                        
                    data={this.state.rows }
                    filter={ filterFactory() }
                    columns={ this.state.columns } 
                />

                <div>
                    <button type="button" className="btn-lg btn-primary " onClick= {this.addRow}>+</button>
                    <button type="button" className="btn-lg btn-danger " onClick= {this.remRow}>-</button>
                    <button type="button" className="btn-lg btn-success ">Guardar</button>
                </div>
            </div>
        );
    }


}

export default CalificacionParcial;
