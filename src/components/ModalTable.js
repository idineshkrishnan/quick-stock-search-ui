import React from 'react';
import PropTypes from 'prop-types';
import {Button, Modal, Table} from "antd";

function ModalTable(props) {
	
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
	
	let data = Object.keys(props.dataSource).map(key => ({ key: key, value: props.dataSource[key] }));
	
	return (
		<Modal
			visible={props.visible}
			onCancel={() => props.setVisible(false)}
			closable={false}
			title={null}
			width={1000}
			footer={[
				<Button
					size="large"
					type="primary"
					onClick={() => props.setVisible(false)}
				>
					Close
				</Button>
			]}
		>
			<Table
				showHeader={false}
				columns={columns}
				dataSource={data}
				pagination={false}
				bordered
			/>
		</Modal>
	);
}

ModalTable.defaultProps = {
	dataSource: {},
	visible: false,
	setVisible: () => {},
};

ModalTable.propTypes = {
	dataSource: PropTypes.object,
	visible: PropTypes.bool.isRequired,
	setVisible: PropTypes.func.isRequired,
};

export default ModalTable;
