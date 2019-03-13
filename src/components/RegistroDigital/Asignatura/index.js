import React from 'react';
//import PropTypes from 'prop-types';
import { FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

const Asignatura = (props) => {
    return (
        <div className={"IDComponent"}>

            <FormGroup controlId="formControlsSelect">
                <ControlLabel><strong>Asignatura:</strong></ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                    <option value="select">Matematicas</option>
                    <option value="other">Instalcion de sistemas electricos subterrado y aereos en edificios</option>
                </FormControl>
            </FormGroup>
        </div>
    );
};

Asignatura.propTypes = {};
Asignatura.defaultProps = {};

export default Asignatura;
