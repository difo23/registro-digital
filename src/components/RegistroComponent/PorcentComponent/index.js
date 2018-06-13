import React from 'react';
import PropTypes from 'prop-types';


var progressState ="PorcentComponent";
const now = 55;
if (now < 80 && now > 60) progressState = "warning";
if (now < 60 ) progressState = "danger";

const PorcentComponent = (props) => {
    return (
        <div className={progressState}>
           <h4><strong>AS: <br/>{now}%</strong></h4>
        </div>
    );
};

PorcentComponent.propTypes = {};
PorcentComponent.defaultProps = {};

export default PorcentComponent;
