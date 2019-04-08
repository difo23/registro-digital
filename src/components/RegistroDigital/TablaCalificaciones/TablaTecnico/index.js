import React from 'react';

import { Grid, Row, Col } from 'react-bootstrap';
import { Card, CardTitle, CardText } from 'reactstrap';
import OpcionesTabCalificaciones from '../OpcionesCalificacionesTecnico';

class TablaTecnico extends React.Component {
	render() {
		return (
			<div>
				<Grid>
					<Card body>
						<CardTitle>
							<h1>CALIFICACIONES MODALIDAD TECNICA</h1>
						</CardTitle>
						<CardText>PERIODO (2019-2020): ASIGNATURA NAME - PROFESOR NAME.</CardText>
						<Row>
							<Col xs={12} md={12}>
								<OpcionesTabCalificaciones />
							</Col>
						</Row>
					</Card>
				</Grid>
			</div>
		);
	}
}

export default TablaTecnico;
