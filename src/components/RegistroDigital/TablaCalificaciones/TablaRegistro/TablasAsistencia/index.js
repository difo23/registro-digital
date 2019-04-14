import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import filterFactory from 'react-bootstrap-table2-filter';
import React, { Component } from 'react';
import { getNewColumns, getNewRow, updateRow } from '../utils';
import FechaAsistencia from '../FechaAsistencia';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { Button } from 'reactstrap';

class TablaAsistencia extends Component {
	constructor(props) {
		super(props);
		console.log('Tabla de Asistencia: ');
		this.state = {
			rows: [],
			columns: getNewColumns(props.tablaType),
			type: props.tablaType,
			student_cuanty: props.student_cuanty
		};
	}

	componentWillMount() {
		this.createListStudent(this.state.student_cuanty);
	}

	createListStudent = (studentCuanty) => {
		for (let index = 0; index < studentCuanty; index++) {
			this.addRow();
		}
	};

	addRow = () => {
		let newId = this.state.rows.length + 1;
		let row = getNewRow(this.state.type);
		row.id = newId;
		let newData = this.state.rows;
		newData.push(row);
		this.setState({ rows: newData });
	};

	selectRow = {
		mode: 'checkbox'

		//TODO: Revisar la informacion de https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Row%20Selection&selectedStory=Selection%20Management&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel
		// selected: [1, 3] // should be a row keys array
	};

	cellEdit = cellEditFactory({
		mode: 'click',
		blurToSave: true,
		beforeSaveCell: (oldValue, newValue, row, column) => {},

		validator: (newValue, row, column) => {
			return true;
		},

		afterSaveCell: (oldValue, newValue, row, column) => {
			let type = this.state.type;
			let rows = this.state.rows;
			let newData = updateRow(type, row.id, rows);

			this.setState({
				rows: newData
			});
			console.log('Estado actualizado', this.state);
		}
	});

	render() {
		return (
			<div>
				<FechaAsistencia />
				<BootstrapTable
					striped
					hover
					selectRow={this.selectRow}
					cellEdit={this.cellEdit}
					keyField="id"
					data={this.state.rows}
					filter={filterFactory()}
					columns={this.state.columns}
				/>

				<div>
					<Button color="success" size="lg">
						Guardar
					</Button>
				</div>
			</div>
		);
	}
}

export default TablaAsistencia;
