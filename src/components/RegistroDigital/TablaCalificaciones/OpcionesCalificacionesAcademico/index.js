//import PropTypes from 'prop-types';
//import { Tabs, Tab } from 'react-bootstrap';
import TablaRegistro from '../TablaRegistro';
import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class OpcionesCalificacionesAcademico extends React.Component {
	constructor(props) {
		super(props);

		this.setCarry = this.setCarry.bind(this);
		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: '0',
			carry: [
				{
					id: 1,
					value: 0
				}
			]
		};
	}

	setCarry(newCarry) {
		this.setState({
			carry: newCarry
		});
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
							CALIFICACIONES DEL AÑO ESCOLAR
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '1' })}
							onClick={() => {
								this.toggle('1');
							}}
						>
							CALIFICACIÓN COMPLETIVA
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '2' })}
							onClick={() => {
								this.toggle('2');
							}}
						>
							CALIFICACIÓN EXTRAORDINARIA
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '3' })}
							onClick={() => {
								this.toggle('3');
							}}
						>
							SITUACIÓN FINAL
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '4' })}
							onClick={() => {
								this.toggle('4');
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
					<TabPane tabId="0">
						<Row>
							<Col sm="12">
								<TablaRegistro tablaType={0} carry={this.state.carry} set={this.setCarry} />
							</Col>
						</Row>
					</TabPane>
				</TabContent>

				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="1">
						<Row>
							<Col sm="12">
								<TablaRegistro tablaType={1} carry={this.state.carry} set={this.setCarry} />
							</Col>
						</Row>
					</TabPane>
				</TabContent>

				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="2">
						<Row>
							<Col sm="12">
								<TablaRegistro tablaType={2} carry={this.state.carry} set={this.setCarry} />
							</Col>
						</Row>
					</TabPane>
				</TabContent>

				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="3">
						<Row>
							<Col sm="12">
								<TablaRegistro tablaType={3} />
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
								<TablaRegistro tablaType={5} />
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
