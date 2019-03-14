import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';


var calificaciones = [{
    id: 'RA%',
    ra1: 0,
    ra2: 0,
    ra3: 0,
    ra4: 0,
    ra5: 0,
    ra6: 0,
    ra7: 0,
    ra8: 0,
    ra9: 0,
    ra10:0,
    calificacionFinal:'100%',
} , {
    id: 1,
    ra1: 0,
    ra2: 0,
    ra3: 0,
    ra4: 0,
    ra5: 0,
    ra6: 0,
    ra7: 0,
    ra8: 0,
    ra9: 0,
    ra10:0,
    calificacionFinal:0
} ];



const columns = [{
    dataField: 'id',
    text: 'Numero:',
    filter: textFilter() // apply text filter
},  {
    dataField: 'ra1',
    text: 'RA%:'
}, {
    dataField: 'ra2',
    text: 'RA%:'
}, {
    dataField: 'ra3',
    text: 'RA%:'
}, {
    dataField: 'ra4',
    text: 'RA%:'
}, {
    dataField: 'ra5',
    text: 'RA%:'
}, {
    dataField: 'ra6',
    text: 'RA%:'
}, {
    dataField: 'ra7',
    text: 'RA%:'
}, {
    dataField: 'ra8',
    text: 'RA%:'
}, {
    dataField: 'ra9',
    text: 'RA%:'
}, {
    dataField: 'ra10',
    text: 'RA%:'
}, {
    dataField: 'calificacionFinal',
    text: 'C.F:'
}];

const CalificacionTecnica= (props) => {

    const updateFinalCalification = (idRow) => {
        var promedio = 0;

        for (var row of calificaciones){
            if (row.id === idRow){
                for (const prop in row){
                    if (prop !== "calificacionFinal" && prop !== "id" ){
                        console.log(prop)
                        promedio += parseInt(row[prop], 10); 

                    }
                }
                promedio = Math.round(promedio/4);
                console.log(promedio);
                row.calificacionFinal = promedio;
            }
        }
         



    }
    const onTableChange = (type, newState) => {
        // handle any data change here
        // console.log(newState.toString());
    }

    const cellEdit = cellEditFactory({
        mode: 'click',

        beforeSaveCell: (oldValue, newValue, row, column) => {
            console.log("old value: ", oldValue);
            console.log("New value: ", newValue);
            console.log("Row: ", row);
            console.log("Column: ",column);
            //changeCalification(row.id, column.dataField, newValue );


        },

        validator: (newValue, row, column) => {
           
            return true;
        },

        afterSaveCell: (oldValue, newValue, row, column) => {
            updateFinalCalification(row.id);

        }

    });

    const selectRow = {
        mode: 'checkbox',
        // selected: [1, 3] // should be a row keys array
    };


    const rowEvents = {
        onClick: (e, row, rowIndex) => {
            // alert("E: "+e+"Row: "+row.toString()+" Row Index: "+rowIndex)
            // console.log(row);
            // console.log(rowIndex)
            // console.log(row.primerTrimestre);
            // console.log(e);
        }
    };




    return (

        <div className="container" style={{ marginTop: 10 }}>
            <BootstrapTable
                // remote={ {
                //     filter: false,
                //     pagination: false,
                //     sort: false,
                //     cellEdit: false
                // } }
                striped
                hover
                selectRow={ selectRow }
                cellEdit={ cellEdit }
                rowEvents={ rowEvents}
                keyField='id'
                onTableChange={ onTableChange }
                data={ calificaciones }
                filter={ filterFactory() }
                columns={ columns } />
                 <div>
                <button type="button" className="btn-lg btn-primary ">+</button>
                <button type="button" className="btn-lg btn-danger ">-</button>
                <button type="button" className="btn-lg btn-success ">Guardar</button>
                 </div>
        </div>
    );
};
export default CalificacionTecnica;
