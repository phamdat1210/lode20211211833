import React from 'react';
import images from '../../assets/images/images';
import CommonMain from '../CommonMain';
import ContentHeader from '../components/ContentHeader';
import useQuery from '../../hooks/useQuery';

const LotteryPage = () => {
	let query = useQuery();

	const RealName = (name) => {
		switch (name) {
			case 'mienbac':
				return 'Miền bắc'
			case 'mientrung':
				return 'Miền trung'
			case 'miennam':
				return 'Miền nam'
			case 'sieutoc':
				return 'Lô đề siêu tốc'
			default:
				return 'Miền bắc'
		}
	};

	const [lotteryType, setLotteryType] = React.useState(' Đánh lô');

	const [amoutK, setAmoutK] = React.useState(0);

	const FomartNumber = (value) => {
		let regx = new RegExp('/^\d+$/');
		console.log(value)
		console.log(regx.test(parseInt(value)))
	}

	return (
		<CommonMain>
			<ContentHeader bannerUrl={images.breadcrumb_lottery} namePage={RealName(query.get("name"))} />
			<section className="lottery-area">
				<div className="buy-tickets">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="buy-tickets-box">
									<div className="heading">
										<h4 className="title">
											{lotteryType}
										</h4>
										<div className="right-area">
											{RealName(query.get("name"))} &#92; {lotteryType}
										</div>
									</div>
									<div className="content">
										<form>
											<div className="row">
												<div className="col-xs-3">
													<div className="info-box">
														<p>{'Tổng tiền cược (K)'}</p>
														<input onChange={e=>FomartNumber(e.target.value)}/>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</section>
		</CommonMain>
	)
}

export default LotteryPage