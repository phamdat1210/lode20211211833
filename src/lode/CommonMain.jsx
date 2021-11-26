import React from 'react';
import {Layout} from "antd";
import AntdHeader from "./components/AntdHeader";
import AntdMenu from "./components/AntdMenu";
import AntdFooter from "./components/AntdFooter";
const { Content } = Layout;

const CommonMain = ({children}) => {
	return (
		<Layout>
			<AntdHeader/>
			<AntdMenu/>
			<Content>
				{children}
			</Content>
			<AntdFooter/>
		</Layout>
	);
};

export default CommonMain;