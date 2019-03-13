import React from 'react';
import Curso from './Curso';
import PeriodoEscolar from './PeriodoEscolar';
import Asignatura from './Asignatura';
import Profesor from './Profesor';
import { Grid, Row, Col } from 'react-bootstrap';
import OpcionesTabCalificaciones from './OpcionesTabCalificaciones';


const RegistroDigital = () => {
    return (
        <div className={"RegistroDigital"}>
            <Grid>

                <Row className={"show-grid"}>

                    <Col xs={11} md={2}>
                        <Curso/>
                    </Col>

                    <Col xs={11} md={2}>
                        <PeriodoEscolar/>
                    </Col>

                    <Col xs={11} md={3}>
                        <Asignatura/>
                    </Col>

                    <Col xs={11} md={4}>
                        <Profesor/>
                    </Col>

                </Row>

                <Row>
                    <Col xs={11} md={10}>
                        <OpcionesTabCalificaciones/>
                    </Col>
                </Row>
            </Grid>
        </div>

    );
};

export default RegistroDigital;