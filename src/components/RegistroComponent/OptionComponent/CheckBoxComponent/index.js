import React from 'react';
import PropTypes from 'prop-types';



const label = 'Selecciona';
const CheckBoxComponent = () => (

    <div className="CheckBoxComponent">
        <label>
            <input
                type="checkbox"
                value={label}
                // checked={false}
                // onChange={this.toggleCheckboxChange}
            />

            {label}
        </label>
    </div>
);

CheckBoxComponent.propTypes = {};
CheckBoxComponent.defaultProps = {};

export default CheckBoxComponent;
