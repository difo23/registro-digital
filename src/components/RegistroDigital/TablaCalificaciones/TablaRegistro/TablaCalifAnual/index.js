import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import filterFactory from 'react-bootstrap-table2-filter';
import React, { Component } from 'react';
import { getNewColumns, getNewRow, updateRow } from '../utils';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { Button, ButtonGroup } from 'reactstrap';

class TablaCalifAnual extends Component {
	constructor(props) {
		super(props);

		this.state = {
			rows: [],
			carry: [],
			columns: getNewColumns(props.tablaType),
			type: props.tablaType,
			student_cuanty: this.props.student_cuanty
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

	remRow = () => {
		let newData = this.state.rows;
		newData.pop();
		this.setState({ rows: newData });
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
			let newcarry = this.state.carry;

			let newData = updateRow(type, row, rows);

			// if (newcarry.length > 0) {
			let index = newcarry.findIndex(function(element) {
				return element.id === row.id;
			});

			if (index >= 0) {
				newcarry[index].value = newData[newcarry[index].id - 1].calificacionFinal;
			} else {
				newcarry.push({
					id: row.id,
					value: newData[row.id - 1].calificacionFinal
				});
			}
			//}

			this.setState({
				rows: newData,
				carry: newcarry
			});
			this.props.set(newcarry);
		}
	});

	render() {
		return (
			<div>
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

export default TablaCalifAnual;
