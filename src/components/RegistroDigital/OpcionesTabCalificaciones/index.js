import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab} from 'react-bootstrap';


const OpcionesTabCalificaciones = (props) => {
    return (
        <div className={"OpcionesTabCalificaciones"}>
            <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Calificaciones Parc.">


                </Tab>
                <Tab eventKey={2} title="Calificacion Compl.">

                </Tab>
                <Tab eventKey={3} title="Calificacion Extra." >

                </Tab>
                <Tab eventKey={4} title="Situacion final-CAP" >

                </Tab>
                <Tab eventKey={5} title="AS" >

                </Tab>
            </Tabs>;
        </div>
    );
};

// OpcionesTabCalificaciones.propTypes = {};
// OpcionesTabCalificaciones.defaultProps = {};

export default OpcionesTabCalificaciones;
