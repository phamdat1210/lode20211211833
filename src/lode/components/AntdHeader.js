import React from 'react';
import '../styles/antdheader.css';
import {Button, Layout, Menu} from 'antd';
import images from "../../assets/images/images";

const { Header} = Layout;

const AntdHeader = () => {
	return (
		<Header className={'header-container'}>
			<nav className={'container-logo'}>
				<a className={'nav-brands'} href={'#'}>
					<img className={'__img'} alt={'logo'} src={images.logo}/>
				</a>
				<div>
				</div>
				<div className={'__right'}>
					<div className={'group_btn'}>
						<Button className={'btn_login'}>
							{'Đăng nhập'}
						</Button>
						<Button className={'btn_register'}>
							{'Đăng ký'}
						</Button>
					</div>
				</div>
			</nav>
			<div className={'nav-bar-header'}>

			</div>
		</Header>
	);
};

export default AntdHeader;