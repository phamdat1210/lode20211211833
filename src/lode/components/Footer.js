import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import images from '../../assets/images/images';

library.add(fas, fab);

const Footer = () => {
	return (
		<footer className="footer" style={{backgroundImage: `url(${images.footerbg})`}} id="footer">
			<div className="subscribe-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="subscribe-box" style={{backgroundImage: `url(${images.newsletter})`}}>
								<form action="#">
									<div className="row">
										<div className="col-lg-12">
											<div className="heading-area">
												<h5 className="sub-title">
													{'Đăng kí ngay'}
												</h5>
												<h4 className="title">
													{'Nhận kết quả nhanh nhất'}
												</h4>
											</div>
										</div>
										<div className="col-lg-3 col-4 d-flex align-self-center">
											<div className="icon">
												<img src={images.mail_box} alt={'MAILBOX'} />
											</div>
										</div>
										<div className="col-lg-6 col-8 d-flex align-self-center">
											<div className="form-area">
												<input type="text" placeholder="Nhập địa chỉ mail..." />
											</div>
										</div>
										<div className="col-lg-3 d-flex align-self-center">
											<div className="button-area">
												<button className="mybtn1" type="submit">Đăng kí
													<span><FontAwesomeIcon icon={['fas','paper-plane']} /></span>
												</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-sm-6 col-lg-3">
						<div className="footer-widget info-link-widget">
							<h4 className="title">
								{'Về chúng tôi'}
							</h4>
						</div>
					</div>
					<div className="col-sm-6 col-lg-3">
						<div className="footer-widget info-link-widget">
							<h4 className="title">
								{'Tài khoản'}
							</h4>
							<ul className="link-list">
								<li>
									<a href="#">
										<FontAwesomeIcon icon={['fas','angle-double-right']} />{' Quản lý tài khoản'}
									</a>
								</li>
								<li>
									<a href="#">
										<FontAwesomeIcon icon={['fas','angle-double-right']} /> {' Xác minh tài khoản'}
									</a>
								</li>
								<li>
									<a href="#">
										<FontAwesomeIcon icon={['fas','angle-double-right']} /> {' Level thành viên'}
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-sm-6 col-lg-3">
						<div className="footer-widget info-link-widget">
							<h4 className="title">
								{'Hỗ trợ'}
							</h4>
							<ul className="link-list">
								<li>
									<a href="#">
										<FontAwesomeIcon icon={['fas','angle-double-right']} /> Help centre
									</a>
								</li>
								<li>
									<a href="#">
										<FontAwesomeIcon icon={['fas','angle-double-right']} /> FAQ
									</a>
								</li>
								<li>
									<a href="#">
										<FontAwesomeIcon icon={['fas','angle-double-right']} /> Quick Start Guide
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="copy-bg">
				<div className="container">
					<div className="row">
						<div className="col-lg-5">
							<div className="left-area">
								<p>Copyright © 2021.All Rights Reserved By <a href="#">Template</a>
								</p>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</footer>

	)
}

export default Footer