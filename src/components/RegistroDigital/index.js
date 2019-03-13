import React from 'react';
import tituloApp from './tituloApp';
import Curso from './Curso';
import periodoEscolar from './PeriodoEscolar';
import Asignatura from './Asignatura';
import profesor from './profesor';
import { Grid, Row, Col } from 'react-bootstrap';
import OpcionesTabCalificaciones from './OpcionesTabCalificaciones';


const registroDigital = () => {
    return (
        <div className={"registroDigital"}>
            <Grid>
                <Row className={"show-grid"}>

                    <Col xs={9} md={8}>
                        <tituloApp/>
                    </Col>

                </Row>
                <Row className={"show-grid"}>

                    <Col xs={8} md={8}>
                        <Curso/>
                    </Col>

                    <Col xs={8} md={8}>
                        <periodoEscolar/>
                    </Col>

                    <Col xs={8} md={8}>
                        <Asignatura/>
                    </Col>

                    <Col xs={8} md={8}>
                        <profesor/>
                    </Col>

                </Row>

                <Row>
                    <Col xs={9} md={8}>
                        <OpcionesTabCalificaciones/>
                    </Col>
                </Row>
            </Grid>
        </div>

    );
};

export default registroDigital;