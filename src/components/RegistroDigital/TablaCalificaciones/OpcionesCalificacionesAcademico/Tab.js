import { NavItem, NavLink } from 'reactstrap';
import React from 'react';
import classnames from 'classnames';
/**
 * props.title -->String
 * props.activeTab --> num
 * props.toggle --> Function
*/

function Tab(props) {
	return (
		<NavItem>
			<NavLink
				className={classnames({ active: props.activeTab === props.tab })}
				onClick={() => {
					props.toggle(props.tab);
				}}
			>
				{props.title}
			</NavLink>
		</NavItem>
	);
}

export default Tab;
