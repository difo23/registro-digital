import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import React, { Component } from 'react';

var calificaciones = [{
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
    text: 'Numero:',
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







const selectRow = {
    mode: 'checkbox',
    // selected: [1, 3] // should be a row keys array
};






class CalificacionParcial extends Component {

    constructor(props) {
        super(props);
        this.state = {calificaciones: calificaciones};
        console.log("Estado inicial", this.state)
      }

      updateFinalCalification (idRow) {
        var promedio = 0;
    
        for (var row of this.state.calificaciones){
            if (row.id === idRow){
                for (const prop in row){
                    if (prop !== "calificacionFinal" && prop !== "id" ){
                        console.log(prop)
                        promedio += parseInt(row[prop], 10); 
    
                    }
                }
                promedio = Math.round(promedio/4);
                console.log("Promedio despues de salvar:",promedio);
                row.calificacionFinal = promedio;

               
            }
        }
        
    }   

   

    render (){
        let addRow= ()=>{

            let newId = this.state.calificaciones.length+1;
            let newRow = {
                id: newId,
                primerTrimestre: 0,
                segundoTrimestre: 0,
                tercerBimestre: 0,
                cuartoTrimestre: 0,
                calificacionFinal:0
            }
            let newData = this.state.calificaciones;
           newData.push(newRow);  
           this.setState({calificaciones: newData})
            
        }

        let remRow= ()=>{
            let newData = this.state.calificaciones; 
            let removeRow =  newData.pop();
            console.log(removeRow)
            console.log(newData)
            this.setState({calificaciones: newData})
            
        }

        const cellEdit = cellEditFactory({
            mode: 'click',
        
            beforeSaveCell: (oldValue, newValue, row, column) => {
                console.log("beforeSaveCell old value: ", oldValue);
                console.log("beforeSaveCellNew value: ", newValue);
                console.log("beforeSaveCell Row: ", row);
                console.log("beforeSaveCell Column: ",column);
                //changeCalification(row.id, column.dataField, newValue );
            },
        
            validator: (newValue, row, column) => {
               
                return true;
            },
        
            afterSaveCell: (oldValue, newValue, row, column) => {
                this.updateFinalCalification(row.id);
                this.setState({
                    calificaciones
                })
                console.log("Estado actualizado", this.state);
        
            }
        
        });

           return (  <div className="container" style={{ marginTop: 10 }}>
                    <BootstrapTable
                        striped
                        hover
                        selectRow={ selectRow }
                        cellEdit={ cellEdit }
                       
                        keyField='id'
                      
                        data={this.state.calificaciones }
                        filter={ filterFactory() }
                        columns={ columns } />
                        <div>
                        <button type="button" class="btn-lg btn-primary " onClick= {addRow}>+</button>
                        <button type="button" class="btn-lg btn-danger " onClick= {remRow}>-</button>
                        <button type="button" class="btn-lg btn-success ">Guardar</button>
                        </div>
                </div>
           );
        }


}

export default CalificacionParcial;
