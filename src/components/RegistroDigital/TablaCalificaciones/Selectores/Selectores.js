import React from 'react';
//import PropTypes from 'prop-types';
import { FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class Selectores extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            type: props.type,
            options: props.options,
            selected: props.selected,
            title: props.title
        }
        console.log('Dentro del elemento select',this.state.options)
        this.onChangeSelect = this.onChangeSelect.bind(this);

    }

    
    componentWillReceiveProps(nextProps){
        if (nextProps.options !== this.props.options){
            this.setState({options: nextProps.options})
        }

    }


    onChangeSelect(e){

        this.props.onChangeSelector(e.target.value, this.state.modalidad)
       // console.log(e.target.value)

    }

    render (){
            
        let options = this.state.options;
        let listOptions = options.map((option, index) =>
            <option value={index} key={index.toString()}>
                    {option}
            </option>
    );


        return (
        <div >
            <FormGroup controlId="formControlsSelect">
                <ControlLabel><strong>{this.state.title}:</strong></ControlLabel>
                <FormControl componentClass="select" placeholder="select" onChange= {this.onChangeSelect}>
                    {listOptions}
                </FormControl>
            </FormGroup>
        </div>
    );
    }
};

Selectores.propTypes = {};
Selectores.defaultProps = {};

export default Selectores;
