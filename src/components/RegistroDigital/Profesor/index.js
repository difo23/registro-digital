import React from 'react';
// import PropTypes from 'prop-types';
import { FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

const Profesor = (props) => {
    return (
        <div className={"IDComponent"}>

            <FormGroup controlId="formControlsSelect">
                <ControlLabel><strong></strong>Profesor:</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                    <option value="select">Jose A. Rodriguez</option>
                    <option value="other">Juan A. Rodriguez</option>
                </FormControl>
            </FormGroup>
        </div>
    );
};

// Profesor.propTypes = {};
// Profesor.defaultProps = {};

export default Profesor;