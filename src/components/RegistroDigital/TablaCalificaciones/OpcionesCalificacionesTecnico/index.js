import TablaRegistro from '../TablaRegistro';
import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class OpcionesCalificacionesTecnico extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: '0'
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
							className={classnames({ active: this.state.activeTab === '0' })}
							onClick={() => {
								this.toggle('0');
							}}
						>
							% RESULTADO DE APRENDIZAJE
						</NavLink>
					</NavItem>{' '}
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '1' })}
							onClick={() => {
								this.toggle('1');
							}}
						>
							% ASISTENCIA
						</NavLink>
					</NavItem>{' '}
				</Nav>

				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="0">
						<Row>
							<Col sm="12">
								<TablaRegistro tablaType={6} />
							</Col>
						</Row>
					</TabPane>
				</TabContent>

				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="1">
						<Row>
							<Col sm="12">
								<TablaRegistro tablaType={5} />
							</Col>
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
