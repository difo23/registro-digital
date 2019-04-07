import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import filterFactory from 'react-bootstrap-table2-filter';
import React, { Component } from 'react';
import { getNewColumns, getNewRow, updateRow } from './utils';
import CONSTANTES from '../../../../constantes';
import FechaAsistencia from './FechaAsistencia';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { Button, ButtonGroup } from 'reactstrap';

class TablaRegistro extends Component {
	selectRow = {
		mode: 'checkbox'

		//TODO: Revisar la informacion de https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Row%20Selection&selectedStory=Selection%20Management&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel
		// selected: [1, 3] // should be a row keys array
	};

	constructor(props) {
		super(props);

		this.state = {
			rows: [],
			columns: getNewColumns(props.tablaType),
			type: props.tablaType
		};

		this.addRow = this.addRow.bind(this);
		this.remRow = this.remRow.bind(this);
	}

	addRow = () => {
		let newId = this.state.rows.length + 1;
		let row = getNewRow(this.state.type);
		row.id = newId;
		let newData = this.state.rows;
		newData.push(row);
		this.setState({ rows: newData });
	};

	remRow = () => {
		let newData = this.state.rows;
		let removeRow = newData.pop();
		console.log(removeRow);
		this.setState({ rows: newData });
	};

	cellEdit = cellEditFactory({
		mode: 'click',
		blurToSave: true,
		beforeSaveCell: (oldValue, newValue, row, column) => {
			console.log('beforeSaveCell old value: ', oldValue);
			console.log('beforeSaveCellNew value: ', newValue);
			console.log('beforeSaveCell Row: ', row);
			console.log('beforeSaveCell Column: ', column);
		},

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
		let fecha;

		if (this.state.type === CONSTANTES.TABLA_TYPE.ASISTENCIA) {
			fecha = <FechaAsistencia />;
		}

		return (
			<div>
				{fecha}
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
					<ButtonGroup>
						<Button color="primary" size="lg" onClick={this.addRow}>
							+
						</Button>
						<Button color="danger" size="lg" onClick={this.remRow}>
							-
						</Button>
						<Button color="success" size="lg">
							Guardar
						</Button>
					</ButtonGroup>
				</div>
			</div>
		);
	}
}

export default TablaRegistro;
