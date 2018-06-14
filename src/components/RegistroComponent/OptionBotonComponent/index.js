import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab} from 'react-bootstrap';

const OptionBotonComponent = (props) => {
    return (
        <div className={"OptionBotonComponent"}>
            <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Calificacion de Modulos">
                    Tab 1 content
                </Tab>
                <Tab eventKey={2} title="Asistencia Anual">
                    Tab 2 content
                </Tab>
                <Tab eventKey={3} title="Planificacion Diaria" >
                    Tab 3 content
                </Tab>
            </Tabs>;
        </div>
    );
};

OptionBotonComponent.propTypes = {};
OptionBotonComponent.defaultProps = {};

export default OptionBotonComponent;
