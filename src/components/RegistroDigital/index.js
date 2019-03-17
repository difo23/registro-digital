import React from 'react';
import Selectores from './Selectores/Selectores';
import { Grid, Row, Col } from 'react-bootstrap';
import OpcionesTabCalificaciones from './OpcionesTabCalificaciones';
import CONSTANTES from '../../constantes'
import {getAsignaturaOptions, getProfesorOptions} from './Selectores/utils/util'


class RegistroDigital extends React.Component {

    
    
    constructor(props){
        super(props);

        let asignaturaOptions = getAsignaturaOptions(0);
        let profesorOptions = getProfesorOptions(0);
        this.state = {
            modalidad: 0,
            asignatura_options: asignaturaOptions,
            profesor_options: profesorOptions,

        }


        //funciones para updates
        this.onProfesorChange = this.onProfesorChange.bind(this);
        this.onGradoChange = this.onGradoChange.bind(this);
        this.onSeccionChange = this.onSeccionChange.bind(this);
        this.onModalidadChange = this.onModalidadChange.bind(this);
        this.onAsignaturaChange = this.onAsignaturaChange.bind(this);
        this.onCentroChange = this.onCentroChange.bind(this);
        this.onPeriodoChange = this.onPeriodoChange.bind(this);
    }


    onGradoChange(element, type){
        console.log(CONSTANTES.GRADO_OPTIONS[element]);
    }


    onSeccionChange(element, type){
        console.log(CONSTANTES.SECCION_OPTIONS[element]);
    }

    onModalidadChange(element, modalidad){

    
        console.log(CONSTANTES.MODALIDAD_OPTIONS[element], element);
        let newAsiganaturaOptions = getAsignaturaOptions(element);
        let newProfesorOptions = getProfesorOptions(element);

        this.setState({
            modalidad: element,
            asignatura_options: newAsiganaturaOptions,
            profesor_options: newProfesorOptions
        });

        console.log(newAsiganaturaOptions);
        console.log(newProfesorOptions);

       // this.render()
       


    }

    onAsignaturaChange(element){
        console.log(CONSTANTES.ASIGNATURA_GENERAL_OPTIONS[element]);
    }

    onProfesorChange(element, type){
        console.log(CONSTANTES.PROFESOR_GENERAL_OPTIONS[element]);

    }

    onCentroChange(element, type){
        console.log(CONSTANTES.CENTRO_EDUCATIVO_OPTIONS[element]);
    }
    onPeriodoChange(element, type){
        console.log(CONSTANTES.PERIODO_ESCOLAR_OPTIONS[element]);
    }

    render(){

        let optionsAsignatura = this.state.asignatura_options;
        let optionsProfesor = this.state.profesor_options;

        console.log('Antes del return',optionsAsignatura, optionsProfesor)
    return (
        <div className={"RegistroDigital"}>
            <Grid>

                <Row className={"show-grid"}>
                <Col xs={10} md={3}>
                    <Selectores 
                        type={CONSTANTES.SELECTOR_TYPE.PERIODO_ESCOLAR} 
                        title={CONSTANTES.SELECTOR_TITLE.PERIODO_ESCOLAR}
                        options= {CONSTANTES.PERIODO_ESCOLAR_OPTIONS}
                        selected= {CONSTANTES.PERIODO_ESCOLAR_OPTIONS[0]}
                        onChangeSelector = {this.onPeriodoChange}
                        />
                        {/* <Profesor/> */}
                    </Col>
                    <Col xs={10} md={4}>
                    <Selectores 
                        type={CONSTANTES.SELECTOR_TYPE.CENTRO_EDUCATIVO} 
                        title={CONSTANTES.SELECTOR_TITLE.CENTRO_EDUCATIVO}
                        options= {CONSTANTES.CENTRO_EDUCATIVO_OPTIONS}
                        selected= {CONSTANTES.CENTRO_EDUCATIVO_OPTIONS[0]}
                        onChangeSelector = {this.onCentroChange}
                        />
                        {/* <Profesor/> */}
                    </Col>

                    <Col xs={10} md={2}>
                        {/* <Grado/> */}
                        <Selectores 
                        type={CONSTANTES.SELECTOR_TYPE.GRADO} 
                        title={CONSTANTES.SELECTOR_TITLE.GRADO}
                        options= {CONSTANTES.GRADO_OPTIONS}
                        selected= {CONSTANTES.GRADO_OPTIONS[0]}
                        onChangeSelector = {this.onGradoChange}
                        />
                    </Col>

                    <Col xs={10} md={2}>

                    <Selectores 
                        type={CONSTANTES.SELECTOR_TYPE.SECCION} 
                        title={CONSTANTES.SELECTOR_TITLE.SECCION}
                        options= {CONSTANTES.SECCION_OPTIONS}
                        selected= {CONSTANTES.SECCION_OPTIONS[0]}
                        onChangeSelector = {this.onSeccionChange}
                        />
                        {/* <PeriodoEscolar/> */}
                    </Col>

                
                </Row>

                <Row>
                <Col xs={10} md={3}>

                    <Selectores 
                        type={CONSTANTES.SELECTOR_TYPE.MODALIDAD}
                        title={CONSTANTES.SELECTOR_TITLE.MODALIDAD}
                        options= {CONSTANTES.MODALIDAD_OPTIONS}
                        selected= {CONSTANTES.MODALIDAD_OPTIONS[0]}
                        onChangeSelector = {this.onModalidadChange}
                    />
                    {/* <Asignatura/> */}
                    </Col>
                    <Col xs={10} md={4}>
                    <Selectores 
                        type={CONSTANTES.SELECTOR_TYPE.ASIGNATURA} 
                        title={CONSTANTES.SELECTOR_TITLE.ASIGNATURA}
                        options= {this.state.asignatura_options }
                        selected= {this.state.asignatura_options[0]}
                        onChangeSelector = {this.onAsignaturaChange}
                        />
                    {/* <Profesor/> */}
                    </Col>

                    <Col xs={10} md={4}>
                    <Selectores 
                        type={CONSTANTES.SELECTOR_TYPE.PROFESOR} 
                        title={CONSTANTES.SELECTOR_TITLE.PROFESOR}
                        options= {this.state.profesor_options}
                        selected= {this.state.profesor_options[0]}
                        onChangeSelector = {this.onProfesorChange}
                        />
                    {/* <Profesor/> */}
                    </Col>

                </Row>
                <Row>
                    <Col xs={12} md={10}>
                        <OpcionesTabCalificaciones/>
                    </Col>
                </Row>
            </Grid>
        </div>

        );
    }
};

export default RegistroDigital;