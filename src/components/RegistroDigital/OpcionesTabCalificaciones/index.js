import React from 'react';
//import PropTypes from 'prop-types';
import { Tabs, Tab} from 'react-bootstrap';
import CalificacionParcial from '../../Calificacion/CalificacionParcial';
import CalificacionTecnica from '../../Calificacion/CalificacionTecnica';
import CalificacionCompletiva from '../../Calificacion/CalificacionCompletiva';
import CalificacionExtraordinaria from '../../Calificacion/CalificacionExtraordinaria';
import CalificacionSituacionFinalCAP from '../../Calificacion/CalificacionSituacionFinalCAP';
import AsisteciaList from '../../Calificacion/AsistenciaList';

const OpcionesTabCalificaciones = (props) => {
    return (
        <div className={"OpcionesTabCalificaciones"}>
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Calificacion Parcial">
                    <CalificacionParcial/>

                </Tab>
                <Tab eventKey={2} title="Calificacion Completiva">
                        <CalificacionCompletiva/>
                </Tab>
                <Tab eventKey={3} title="Calificacion Extraordinaria" >
                        <CalificacionExtraordinaria/>
                </Tab>
                <Tab eventKey={4} title="Situacion final-CAP" >
                        <CalificacionSituacionFinalCAP/>
                </Tab>
                <Tab eventKey={5} title="AS" >
                        <AsisteciaList/>
                </Tab>
                <Tab eventKey={6} title="Calificacion Tecnica" >
                    <CalificacionTecnica/>
                </Tab>
            </Tabs>
        </div>
    );
};

// OpcionesTabCalificaciones.propTypes = {};
// OpcionesTabCalificaciones.defaultProps = {};

export default OpcionesTabCalificaciones;
