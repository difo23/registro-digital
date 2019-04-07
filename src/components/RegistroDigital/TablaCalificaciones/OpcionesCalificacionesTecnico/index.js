import TablaRegistro from '../TablaRegistro';
import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class OpcionesCalificacionesTecnico extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: '1'
		};
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}

	render() {
		return (
			<div>
				<Nav tabs>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '5' })}
							onClick={() => {
								this.toggle('5');
							}}
						>
							% RESULTADO DE APRENDIZAJE
						</NavLink>
					</NavItem>{' '}
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '6' })}
							onClick={() => {
								this.toggle('5');
							}}
						>
							% ASISTENCIA
						</NavLink>
					</NavItem>{' '}
				</Nav>

				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="5">
						<Row>
							<Col sm="12">{/* <TablaRegistro tablaType={1} /> */}</Col>
						</Row>
					</TabPane>
				</TabContent>

				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="6">
						<Row>
							<Col sm="12">{/* <TablaRegistro tablaType={1} /> */}</Col>
						</Row>
					</TabPane>
				</TabContent>
			</div>
		);
	}
}

// OpcionesTabCalificaciones.propTypes = {};
// OpcionesTabCalificaciones.defaultProps = {};

export default OpcionesCalificacionesTecnico;
