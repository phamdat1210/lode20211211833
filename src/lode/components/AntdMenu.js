import React, {useState} from 'react';
import {Menu} from "antd";
import '../styles/antdMenu.css'
const AntdMenu = () => {

	const [menuState, setMenuState] = useState([
		{
			name: 'Miền Bắc',
			link: '',
		},
		{
			name: 'Miền Trung',
			link: '',
		},
		{
			name: 'Miền Nam',
			link: '',
		},
		{
			name: 'Kenno Vietlot',
			link: '',
		},
		{
			name: 'Kenno 24/7',
			link: '',
		},
		{
			name: 'Sự Kiện',
			link: '',
		},
	]);

	return (
		<Menu className={'menu-container'} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
			{menuState.map((item,index)=>(
				<Menu.Item key={index}>{item.name.toUpperCase()}</Menu.Item>
			))}
		</Menu>
	);
};

export default AntdMenu;