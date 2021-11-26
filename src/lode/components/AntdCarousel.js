import React from 'react';
import {Button, Carousel} from 'antd';
import images from "../../assets/images/images";
import '../styles/'

const AntdCarousel = () => {
	return (
		<Carousel autoplay>
			{/*<div>*/}
			{/*	<img src={images.banner_3} alt={'banner3'}/>*/}

			{/*</div>*/}
			{/*<div>*/}
			{/*	<img src={images.banner_2} alt={'banner2'}/>*/}
			{/*</div>*/}
			<div className={'bg_img_1'}>
				<img src={images.banner_1} alt={'banner1'}/>
				<div >
					<Button type={'primary'}>
						{'Chơi ngay'}
					</Button>
				</div>
			</div>
		</Carousel>
	);
};

export default AntdCarousel;