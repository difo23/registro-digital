import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

const index = (props) => {
    return (
        <div className={"IDComponent"}>
            {/*<h4><strong>6F</strong><br/>*/}
                {/*2018-19 </h4>*/}
            <FormGroup controlId="formControlsSelect">
                <ControlLabel><strong></strong>Curso:</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                    <option value="select">6F</option>
                    <option value="other">6D</option>
                </FormControl>
            </FormGroup>
        </div>
    );
};

index.propTypes = {};
index.defaultProps = {};

export default index;
