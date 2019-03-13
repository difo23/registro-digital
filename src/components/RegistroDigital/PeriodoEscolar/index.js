import React from 'react';
//import PropTypes from 'prop-types';
import { FormControl, FormGroup, ControlLabel} from 'react-bootstrap';


const PeriodoEscolar = (props) => {
    return (
        <div className={"IDComponent"}>
            <FormGroup controlId="formControlsSelect">
                <ControlLabel><strong>Año:</strong></ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                    <option value="select">2017-18</option>
                    <option value="other">2018-19</option>

                </FormControl>
            </FormGroup>
        </div>
    );
};

PeriodoEscolar.propTypes = {};
PeriodoEscolar.defaultProps = {};

export default PeriodoEscolar;
