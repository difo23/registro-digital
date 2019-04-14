import React from 'react';

import { Grid, Row, Col } from 'react-bootstrap';
import { Card, CardTitle, CardText } from 'reactstrap';
import OpcionesCalificacionesAcademico from '../OpcionesCalificacionesAcademico';

class TablaAcademica extends React.Component {
	render() {
		return (
			<div>
				<Grid>
					<Card body>
						<CardTitle>
							<h2>CALIFICACIONES MODALIDAD ACADEMICA (SIGLAS CENTRO)</h2>
						</CardTitle>
						<CardText>
							<strong>PERIODO (2019-2020): ASIGNATURA SIGLAS - PROFESOR NAME.</strong>
							<div>
								C.F.= Califcación Final %AA= Porciento de Asistencia Anual C.P.C.= Califcación Prueba
								Completiva C.C.= Califcación Completiva C.P.EX= Califcación Prueba Extraordinaria C.EX.=
								Califcación Extraordinaria A= Aprobada R= Reprobada CAP= Califcación Asignaturas
								Pendientes
							</div>
						</CardText>
						<Row>
							<Col xs={12} md={12}>
								<OpcionesCalificacionesAcademico />
							</Col>
						</Row>
					</Card>
				</Grid>
			</div>
		);
	}
}

export default TablaAcademica;
