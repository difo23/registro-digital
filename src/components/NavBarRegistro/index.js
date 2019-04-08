import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	InputGroup,
	InputGroupText,
	InputGroupAddon,
	Input
} from 'reactstrap';

class NavBarRegistro extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);

		this.state = {
			isOpen: false
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div>
				<Navbar color="dark" dark expand="md">
					<NavbarBrand href="/">Registro Digital</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<InputGroup>
									<Input />
									<InputGroupAddon addonType="append">
										<InputGroupText>Search</InputGroupText>
									</InputGroupAddon>
								</InputGroup>
							</NavItem>
							{/* <NavItem>
								<NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
							</NavItem> */}
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Interfaces
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem href="/centros">Centro</DropdownItem>
									<DropdownItem href="/libros">Libro</DropdownItem>
									<DropdownItem href="/estudiantes">Estudiante</DropdownItem>
									<DropdownItem href="/asignaturas">Asignatura</DropdownItem>
									<DropdownItem divider />
									<DropdownItem href="/califAcadem">Calificaciones Academicas</DropdownItem>
									<DropdownItem href="/califTecn">Calificaciones Tecnicas</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default NavBarRegistro;
