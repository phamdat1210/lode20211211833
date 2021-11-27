import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, fab);

const Header = () => {

	const [lotterys, setLotterys] = React.useState([
		{
			name: 'Miền bắc',
			link: ''
		},
		{
			name: 'Miền trung',
			link: ''
		},
		{
			name: 'Miền nam',
			link: ''
		},
		{
			name: 'Lô đề siêu tốc',
			link: ''
		},
	]);


	return (
		<header className="header">
			{/* Top Header Area Start */}
			<section className="top-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content">
								<div className="left-content">
									<ul className="left-list">
										<li>
											<p>
												<FontAwesomeIcon icon={['fas','headset']} />{' Hỗ trợ'}
											</p>
										</li>
										<li>
											<p>
												<FontAwesomeIcon icon={['fas','envelope']} /><a href="#">{' datph@hqltech.vn'}</a>
											</p>
										</li>
										{/* <li>
											<div className="language-selector">
												<select name="language" className="language">
													<option value={1}>English</option>
													<option value={2}>Việt Nam</option>
												</select>
											</div>
										</li> */}
									</ul>
								</div>
								<div className="right-content">
									<ul className="right-list">
										<li>
											<div className="cart-icon tm-dropdown">
												<FontAwesomeIcon icon={['fas','cart-arrow-down']} />
												<span className="cart-count">10</span>
												<div className="tm-dropdown-menu">
													<ul className="list">
														<li className="list-item">
															<div className="close">
																<FontAwesomeIcon icon={['fas','times']} />
															</div>
															<ul className="number-list">
																<li>24</li>
																<li>25</li>
																<li>26</li>
																<li>27</li>
																<li>28</li>
															</ul>
														</li>
													</ul>
													<a href="cart.html" className="link-btn">{'Thanh toán'}</a>
												</div>
											</div>
										</li>
										{/* <li>
											<div className="notofication tm-dropdown">
												<FontAwesomeIcon icon={['fas','bell']} />
												<span className="count">11</span>
												<div className="tm-dropdown-menu">
													<ul className="list">
														<li>
															<a href="#">
																<FontAwesomeIcon icon={['fas','bell']} />
																{' Thông báo'}
															</a>
														</li>
													</ul>
												</div>
											</div>
										</li> */}
										<li>
											<a href="#" className="sign-in" data-toggle="modal" data-target="#login">
												<FontAwesomeIcon icon={['fas','user']} /> {'Đăng nhập'}
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Top Header Area End */}
			{/*Main-Menu Area Start*/}
			<div className="mainmenu-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<nav className="navbar navbar-expand-lg navbar-light">
								<a className="navbar-brand" href="#">
									{/* <img src="assets/images/logo.png" alt="" /> */}
								</a>
								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_menu" aria-controls="main_menu" aria-expanded="false" aria-label="Toggle navigation">
									<span className="navbar-toggler-icon" />
								</button>
								<div className="collapse navbar-collapse fixed-height" id="main_menu">
									<ul className="navbar-nav ml-auto">
										<li className="nav-item">
											<a className="nav-link active" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												{'Trang chủ'}
											</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" href="play.html">{'Trò chơi'}
												<div className="mr-hover-effect" /></a>
										</li>
										<li className="nav-item dropdown">
											<a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												{'Xổ số'}
												<div className="mr-hover-effect" />
											</a>
											<ul className="dropdown-menu">
												{lotterys.map((item,index)=>(
													<li key={index}>
														<a className="dropdown-item" href={item.link}>
															<FontAwesomeIcon icon={['fas','angle-double-right']} /> {item.name}
														</a>
													</li>
												))}
											</ul>
										</li>
										<li className="nav-item">
											<a className="nav-link" href="tournaments.html">{'Giải đấu'}
												<div className="mr-hover-effect" /></a>
										</li>
										{/* <li className="nav-item dropdown">
											<a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												Pages
												<div className="mr-hover-effect" />
											</a>
											<ul className="dropdown-menu">
												<li><a className="dropdown-item" href="about.html"> <i className="fa fa-angle-double-right" />About</a></li>
												<li><a className="dropdown-item" href="affiliate.html"> <i className="fa fa-angle-double-right" />Affiliate</a></li>
												<li><a className="dropdown-item" href="awards.html"> <i className="fa fa-angle-double-right" />Awards</a></li>
												<li><a className="dropdown-item" href="bonus.html"> <i className="fa fa-angle-double-right" />Bonus</a></li>
												<li><a className="dropdown-item" href="cart.html"> <i className="fa fa-angle-double-right" />Cart</a></li>
												<li><a className="dropdown-item" href="faq.html"> <i className="fa fa-angle-double-right" />Faq</a></li>
												<li><a className="dropdown-item" href="how-it-work.html"> <i className="fa fa-angle-double-right" />How It Work</a></li>
												<li><a className="dropdown-item" href="terms-conditions.html"> <i className="fa fa-angle-double-right" />Terms &amp; Condition</a></li>
												<li><a className="dropdown-item" href="terms-conditions-details.html"> <i className="fa fa-angle-double-right" />Condition Details</a></li>
												<li><a className="dropdown-item" href="404.html"> <i className="fa fa-angle-double-right" />404</a></li>
											</ul>
										</li> */}
										<li className="nav-item">
											<a className="nav-link" href="contact.html">Liên hệ
												<div className="mr-hover-effect" /></a>
										</li>
									</ul>
									<a href="#" className="mybtn1" data-toggle="modal" data-target="#signin"> {'Tham gia ngay'}</a>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
			{/*Main-Menu Area Start*/}
		</header>
	)
}

export default Header