import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormGroup, ControlLabel} from 'react-bootstrap';


const PeriodoEscolarComponent = (props) => {
    return (
        <div className={"IDComponent"}>
            {/*<h4><strong>6F</strong><br/>*/}
            {/*2018-19 </h4>*/}
            <FormGroup controlId="formControlsSelect">
                <ControlLabel><strong>Año:</strong></ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                    <option value="select">2017-8</option>
                    <option value="other">2018-9</option>
                </FormControl>
            </FormGroup>
        </div>
    );
};

PeriodoEscolarComponent.propTypes = {};
PeriodoEscolarComponent.defaultProps = {};

export default PeriodoEscolarComponent;
