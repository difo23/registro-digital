//import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';
import TablaRegistro from '../TablaRegistro';
import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class OpcionesCalificacionesAcademico extends React.Component {
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
							className={classnames({ active: this.state.activeTab === '1' })}
							onClick={() => {
								this.toggle('1');
							}}
						>
							CALIFICACIONES DEL AÑO ESCOLAR
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '2' })}
							onClick={() => {
								this.toggle('2');
							}}
						>
							CALIFICACIÓN COMPLETIVA
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '3' })}
							onClick={() => {
								this.toggle('3');
							}}
						>
							CALIFICACIÓN EXTRAORDINARIA
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '4' })}
							onClick={() => {
								this.toggle('4');
							}}
						>
							SITUACIÓN FINAL
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '5' })}
							onClick={() => {
								this.toggle('5');
							}}
						>
							CAP
						</NavLink>
					</NavItem>{' '}
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '5' })}
							onClick={() => {
								this.toggle('5');
							}}
						>
							AS%
						</NavLink>
					</NavItem>{' '}
				</Nav>

				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="1">
						<Row>
							<Col sm="12">
								<TablaRegistro tablaType={0} />
							</Col>
						</Row>
					</TabPane>
				</TabContent>

				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="2">
						<Row>
							<Col sm="12">
								<TablaRegistro tablaType={1} />
							</Col>
						</Row>
					</TabPane>
				</TabContent>

				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="3">
						<Row>
							<Col sm="12">
								<TablaRegistro tablaType={2} />
							</Col>
						</Row>
					</TabPane>
				</TabContent>

				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="4">
						<Row>
							<Col sm="12">{/* <TablaRegistro tablaType={1} /> */}</Col>
						</Row>
					</TabPane>
				</TabContent>

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

export default OpcionesCalificacionesAcademico;
