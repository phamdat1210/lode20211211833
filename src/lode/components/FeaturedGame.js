import React from 'react';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import images from '../../assets/images/images';

library.add(fas, fab);

const FeaturedGame = () => {
    return (
        <section className="featured-game" style={{backgroundImage: `url(${images.featuredgame_bg})`}}>
				{/* Features Area Start */}
				<div className="features">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="feature-box">
									<div className="feature-box-inner">
										<div className="row">
											<div className="col-lg-4 col-md-6">
												<div className="single-feature">
													<div className="icon one">
														<img src={images.feature_icon1} alt="" />
													</div>
													<div className="content">
														<h4 className="title">
															ƯU ĐÃI ĐỘC QUYỀN
														</h4>
														<a href="#" className="link">Xem thêm <FontAwesomeIcon icon={['fas','arrow-right']} /></a>
													</div>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-feature">
													<div className="icon two">
														<img src={images.feature_icon2} alt="" />
													</div>
													<div className="content">
														<h4 className="title">
															Công bằng
														</h4>
														<a href="#" className="link">Xem thêm <FontAwesomeIcon icon={['fas','arrow-right']}/></a>
													</div>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="single-feature">
													<div className="icon three">
														<img src={images.feature_icon3} alt="" />
													</div>
													<div className="content">
														<h4 className="title">
															24/7 Hỗ trợ
														</h4>
														<a href="#" className="link">Xem thêm <FontAwesomeIcon icon={['fas','arrow-right']}/></a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Features Area End */}
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8 col-md-10">
							<div className="section-heading">
								<h5 className="subtitle">
									Hãy kiểm tra
								</h5>
								<h2 className="title">
									Trò chơi sắp ra mắt
								</h2>
								<p className="text">
									Kiểm tra trò chơi nổi bật mới nhất của chúng tôi! Để đáp ứng những thách thức ngày nay và kiếm tiền điện tử. 10 người chơi hàng đầu nhận giải thưởng mỗi giờ!
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="game-slider">
								<div className="item">
									<div className="single-game">
										<img src={images.game_icon1} alt="" />
										<a href="#" className="mybtn2">Chơi ngay!</a>
									</div>
								</div>
								<div className="item">
									<div className="single-game">
										<img src={images.game_icon2} alt="" />
										<a href="#" className="mybtn2">Chơi ngay!</a>
									</div>
								</div>
								<div className="item">
									<div className="single-game">
										<img src={images.game_icon3} alt="" />
										<a href="#" className="mybtn2">Chơi ngay!</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		</section>
    )
}

export default FeaturedGame