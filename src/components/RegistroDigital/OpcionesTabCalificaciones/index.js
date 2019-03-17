import React from 'react';
//import PropTypes from 'prop-types';
import { Tabs, Tab} from 'react-bootstrap';
import TablaRegistro from '../../RegistroDigital/TablaRegistro'

class OpcionesTabCalificaciones extends React.Component  {

    constructor(props){
        super(props);

    }



    render(){
        return (
            <div className={"OpcionesTabCalificaciones"}>
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                    
                    <Tab eventKey={1} title="Calificacion Parcial">
                        
                        <TablaRegistro tablaType= {0}/>

                    </Tab>
                    <Tab eventKey={2} title="Calificacion Extraordinaria ">
                                <TablaRegistro tablaType= {1}/>
                    </Tab>
                    <Tab eventKey={3} title="Calificacion Completiva" >
                                <TablaRegistro tablaType= {2}/>
                            
                    </Tab>
                    {/* <Tab eventKey={4} title="Situacion final-CAP" >
                            {/* <CalificacionSituacionFinalCAP/> */}
                    {/* </Tab> */} 
                    
                    <Tab eventKey={6} title="Calificacion Tecnica" >
                    <TablaRegistro tablaType= {4}/>
                        
                    </Tab>

                    <Tab eventKey={5} title="AS" >
                    <TablaRegistro tablaType= {3}/>
                            
                    </Tab>
                </Tabs>
            </div>
        );
    }
};

// OpcionesTabCalificaciones.propTypes = {};
// OpcionesTabCalificaciones.defaultProps = {};

export default OpcionesTabCalificaciones;
