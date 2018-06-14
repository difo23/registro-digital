import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';

var progressState ="success";
const now = 65;
if (now < 80 && now > 60) progressState = "warning";
if (now < 60 ) progressState = "danger";

const ProgressBarComponent = (props) => {
    return (
     <div className={"ProgressBarComponent"} >
         <ProgressBar  bsStyle={progressState} now={now} label={`Promedio del curso: ${now}%`} />
     </div>
    );
};

ProgressBarComponent.propTypes = {}; ProgressBarComponent.defaultProps = {};

export default ProgressBarComponent;
