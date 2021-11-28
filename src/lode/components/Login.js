import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, fab);

const Login = () => {
	return (
		<div className="modal fade login-modal" id="login" tabIndex={-1} role="dialog" aria-labelledby="login" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
					<div className="modal-body">
						<div className="logo-area">
							<img className="logo" src={"assets/images/logo.png"} alt="" />
						</div>
						<div className="header-area">
							<h4 className="title">Chào mừng BẠN TRỞ LẠI!</h4>
							<p className="sub-title">Nhập thông tin đăng nhập dưới đây.</p>
						</div>
						<div className="form-area">
							<form action="#" method="POST">
								<div className="form-group">
									<label htmlFor="login-input-email">Email</label>
									<input type="email" className="input-field" id="login-input-email" placeholder="Nhập email..." />
								</div>
								<div className="form-group">
									<label htmlFor="login-input-password">Mật khẩu</label>
									<input type="password" className="input-field" id="login-input-password" placeholder="Nhập mật khẩu..." />
								</div>
								<div className="form-group">
									<div className="box">
										<div className="left">
											<input type="checkbox" className="check-box-field" id="input-save-password" defaultChecked />
											<label htmlFor="input-save-password"> Ghi nhớ mật khẩu</label>
										</div>
										<div className="right">
											<a href="/#">
												Quên mật khẩu?
											</a>
										</div>
									</div>
								</div>
								<div className="form-group">
									<button type="submit" className="mybtn1">Đăng nhập</button>
								</div>
							</form>
						</div>
						<div className="form-footer">
							<p>Không phải là thành viên?
								<a href="/#">Tạo tài khoản <FontAwesomeIcon icon={['fas','angle-double-right']} /></a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login