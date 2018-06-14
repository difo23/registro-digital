import React from 'react';
import OptionComponent from './OptionComponent';
import PorcentComponent from './PorcentComponent';
import IDComponent from './IDComponent';
import { Grid, Row, Col } from 'react-bootstrap';
import OptionBotonComponent from './OptionBotonComponent';
import PeriodoEscolarComponent from './OptionComponent/PeriodoEscolarComponent';

const RegistroComponent = () => {
    return (
        <div className={"RegistroComponent"}>
            <Grid>
                <Row className={"show-grid"}>
                    <Col xs={2} md={2}>
                        <IDComponent/>
                    </Col>
                    <Col xs={6} md={1}>
                        <OptionComponent/>
                    </Col>
                    {/*<Col xs={2} md={1}>*/}
                    {/*<PeriodoEscolarComponent/>*/}
                    {/*</Col>*/}
                    <Col xs={4} md={2}>
                        <PorcentComponent/>
                    </Col>
                </Row>

                <Row>
                    <Col xs={10} md={4}>
                        <OptionBotonComponent/>
                    </Col>
                </Row>
            </Grid>
        </div>

    );
};

export default RegistroComponent;