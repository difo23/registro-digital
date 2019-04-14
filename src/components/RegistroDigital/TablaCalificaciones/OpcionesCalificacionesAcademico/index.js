import React from 'react';
import { Col, Nav, Row, TabContent, TabPane } from 'reactstrap';
import TablaRegistro from '../TablaRegistro';
import TablaCalifAnual from '../TablaRegistro/TablaCalifAnual';
import TablaCalifCompletiva from '../TablaRegistro/TablaCalifCompletiva';
import TablaCalifExtra from '../TablaRegistro/TablaCalifExtra';
import TablaAsistencia from '../TablaRegistro/TablasAsistencia';
import Tab from './Tab';

class OpcionesCalificacionesAcademico extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: '0',
			student_cuanty: 27,
			carry: [],
			carry_extra: []
		};
	}

	setCarry = (newCarry) => {
		this.setState({
			carry: newCarry
		});
	};

	setCarryExtra = (newCarry) => {
		this.setState({
			carry_extra: newCarry
		});
	};

	componentWillUpdate() {
		console.log('Antes de update OptionCaliAca ', this.state);
	}

	toggle = (tab) => {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	};

	render() {
		return (
			<div>
				<Nav tabs>
					<Tab title={'CALIFICACIONES AÑO'} activeTab={this.state.activeTab} toggle={this.toggle} tab={'0'} />
					<Tab
						title={'CALIFICACIÓN COMPLETIVA'}
						activeTab={this.state.activeTab}
						toggle={this.toggle}
						tab={'1'}
					/>
					<Tab
						title={'CALIFICACIÓN EXTRAORDINARIO'}
						activeTab={this.state.activeTab}
						toggle={this.toggle}
						tab={'2'}
					/>
					<Tab title={'SITUACIÓN FINAL'} activeTab={this.state.activeTab} toggle={this.toggle} tab={'3'} />
					<Tab title={'CAP'} activeTab={this.state.activeTab} toggle={this.toggle} tab={'4'} />
					<Tab title={'AS%'} activeTab={this.state.activeTab} toggle={this.toggle} tab={'5'} />
				</Nav>

				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="0">
						<Row>
							<Col sm="12">
								<TablaCalifAnual
									tablaType={0}
									carry={this.state.carry}
									set={this.setCarry}
									student_cuanty={this.state.student_cuanty}
								/>
							</Col>
						</Row>
					</TabPane>
				</TabContent>

				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="1">
						<Row>
							<Col sm="12">
								<TablaCalifCompletiva tablaType={1} set={this.setCarryExtra} carry={this.state.carry} />
							</Col>
						</Row>
					</TabPane>
				</TabContent>

				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="2">
						<Row>
							<Col sm="12">
								<TablaCalifExtra tablaType={2} carry={this.state.carry_extra} />
							</Col>
						</Row>
					</TabPane>
				</TabContent>

				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="3">
						<Row>
							<Col sm="12">
								<TablaRegistro tablaType={3} student_cuanty={this.state.student_cuanty} />
							</Col>
						</Row>
					</TabPane>
				</TabContent>

				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="4">
						<Row>
							<Col sm="12">
								<TablaRegistro tablaType={4} />
							</Col>
						</Row>
					</TabPane>
				</TabContent>

				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="5">
						<Row>
							<Col sm="12">
								<TablaAsistencia tablaType={5} student_cuanty={this.state.student_cuanty} />
							</Col>
						</Row>
					</TabPane>
				</TabContent>
			</div>
		);
	}
}

// OpcionesTabCalificaciones.propTypes = {};S
// OpcionesTabCalificaciones.defaultProps = {};

export default OpcionesCalificacionesAcademico;
