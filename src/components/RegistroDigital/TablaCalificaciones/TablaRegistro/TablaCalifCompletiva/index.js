import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import filterFactory from 'react-bootstrap-table2-filter';
import React, { Component } from 'react';
import { getNewColumns, getNewRow, updateRow } from '../utils';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { Button, ButtonGroup } from 'reactstrap';

class TablaCalifCompletiva extends Component {
	constructor(props) {
		super(props);
		this.state = this.getInitialState();
		this.addRow = this.addRow.bind(this);
	}

	getInitialState = () => {
		let state = {
			rows: [],
			columns: getNewColumns(this.props.tablaType),
			type: this.props.tablaType,
			carry: this.props.carry
		};
		console.log('Colocar estado incial:', state);
		return state;
	};

	selectRow = {
		mode: 'checkbox'
	};

	//TODO: Crear carry Extraordinario

	rowsUpdateWithCarry = (carry) => {
		let rows = [];

		for (let index = 0; index < carry.length; index++) {
			let elementCarry = carry[index];
			let elementRow = this.state.rows[index];
			let row;

			if (parseInt(elementCarry.value, 10) < 70) {
				if (index < this.state.rows.length) {
					row = getNewRow(this.state.type);
					row.id = elementCarry.id;
					row.cincuetaPorCientoPCP = Math.round(parseInt(elementCarry.value, 10) * 0.5);
					row.CPC = elementRow.CPC;

					row.cincuentaPorCientoCPC = Math.round(parseInt(row.CPC, 10) * 0.5);

					row.calificacionFinal = row.cincuentaPorCientoCPC + row.cincuetaPorCientoPCP;
				} else {
					row = this.addRow(elementCarry);
				}
			}

			if (row) {
				rows.push(row);
			}
		}

		return rows;
	};

	componentWillReceiveProps(nextProps) {
		let carryChange = true;

		if (nextProps.carry.length === this.props.carry.length) {
			nextProps.carry.forEach((elementNew) => {
				this.props.carry.forEach((elementOld) => {
					if (elementNew.id !== elementOld.id || elementOld.value !== elementNew.value) {
						carryChange = false;
					}
				});
			});
		}

		console.log('NextProps en Completiva: ', nextProps.carry);
		let rows = this.rowsUpdateWithCarry(nextProps.carry);

		this.setState({
			carryChange: carryChange,
			carry: nextProps.carry,
			rows: rows
		});
	}

	shouldComponentUpdate() {
		console.log('Should Upadate en completiva: ', this.state);
		if (this.state.carryChange) {
			return true;
		}
		return true;
	}

	componentWillMount() {
		let carry = this.props.carry;
		let rows = this.rowsUpdateWithCarry(carry);
		this.setState({ rows: rows });
		console.log('Actualizacion del estado antes de montar: ', this.state);
	}

	addRow = (carry) => {
		let row = getNewRow(this.state.type);
		row.id = carry.id;
		row.cincuetaPorCientoPCP = Math.round(parseInt(carry.value, 10) * 0.5);
		return row;
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
			console.log('Estado actualizado en completiva', this.state);
		}
	});

	render() {
		console.log('Dibujando en completiva: ', this.state);
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
					<Button color="success" size="lg">
						Guardar
					</Button>
				</div>
			</div>
		);
	}
}

export default TablaCalifCompletiva;
