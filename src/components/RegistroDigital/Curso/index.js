import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

const Curso = (props) => {
    return (
        <div className={"IDComponent"}>

            <FormGroup controlId="formControlsSelect">
                <ControlLabel><strong>Curso:</strong></ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                    <option value="select">6F</option>
                    <option value="other">5F</option>
                </FormControl>
            </FormGroup>
        </div>
    );
};

Curso.propTypes = {};
Curso.defaultProps = {};

export default Curso;