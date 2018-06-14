import React from 'react';
import LabelComponent from './LabelComponent/index';
import CheckBoxComponent from './CheckBoxComponent/index';
import ProgessBarComponent from './ProgressBarComponent';
import PeriodoEscolarComponent from './PeriodoEscolarComponent';
import { Grid, Row, Col } from 'react-bootstrap';


const OptionComponent = (props) => {
    return (
        <div className={"OptionComponent"}>
            <Grid>
                <Row className={"show-grid"}>
                    <Col xs={8} md={1}>
                        <Row className={"show-grid"}>
                            <Col xs={6} md={1}><LabelComponent/></Col>
                            <Col xs={3} md={1}><PeriodoEscolarComponent/></Col>
                        </Row>
                    </Col>
                    {/*<Col xs={2} md={1}>*/}
                        {/*<PeriodoEscolarComponent/>*/}
                    {/*</Col>*/}
                </Row>
                <Row className={"show-grid"}>
                    <Col xs={6} md={1}>
                        <ProgessBarComponent/>
                    </Col>
                </Row>

            </Grid>
        </div>
    );
};
 OptionComponent.propTypes = {}; OptionComponent.defaultProps = {};

export default OptionComponent;
