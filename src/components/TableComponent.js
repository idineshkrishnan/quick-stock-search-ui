import React from 'react';
import PropTypes from 'prop-types';
import {Button, Table} from "antd";
import ModalTable from "./ModalTable";

const TableComponent = (props) => {
	
	const [visible, setVisible] = React.useState(false);
	
	const columns = [
		{
			title: 'Key',
			dataIndex: 'key',
			key: 'key',
		},
		{
			title: 'Value',
			dataIndex: 'value',
			key: 'value',
		}
	];
	
	let data = Object.keys(props.dataSource)
		.filter(key => props.visibleData.includes(key))
		.map(key => ({ key: key, value: props.dataSource[key] }));
	
	return (
		<React.Fragment>
			<Table
				showHeader={false}
				columns={columns}
				dataSource={data}
				pagination={false}
				bordered
				footer={() => (
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
						<Button
							size="large"
							type="primary"
							onClick={() => setVisible(true)}
						>
							View More
						</Button>
					</div>
				)}
			/>
			{visible && (
				<ModalTable
					visible={visible}
					setVisible={setVisible}
					dataSource={props.dataSource}
				/>
			)}
		</React.Fragment>
	);
}

TableComponent.defaultProps = {
	dataSource: {},
	visibleData: [],
};

TableComponent.propTypes = {
	dataSource: PropTypes.object,
	visibleData: PropTypes.arrayOf(PropTypes.string),
};

export default TableComponent;
