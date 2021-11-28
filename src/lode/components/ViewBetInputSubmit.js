import React from 'react';
import {useFormContext} from "react-hook-form";

const ViewBetInputSubmit = ({
	bigTitle = '',
	subtitle = '',
	minBet = '',
	betInLength = '',
	winnerBet = ''
}) => {

	const {register} = useFormContext()

	return (
		<div className="col-md-3">
			<div className="right-panel">
				<div className="head-panel">
					<p>{bigTitle}</p>
				</div>
				<div className="content-panel">
					<p className="cat-lode">{subtitle}</p>
					<div id="sodanh"/>
					<div className="form-group">
						<div className="info-amount">Tổng tiền đánh(k)</div>
						<input {...register('soTienCuoc')} type="text" placeholder="0" className="format_currency tongtiendanh form-new-2"/>
					</div>
					<div className="block-win-bet">
						<div className="form-group">
							<div className="bet-one-money">
								<span className="bet-one-money-text">Cược tối thiểu</span>
								<span className="bet-one-money-num format_currency">{minBet}</span>
							</div>
						</div>
						<div className="form-group">
							<div className="bet-one-money">
								<span className="bet-one-money-text">Tiền đánh / 1 con</span>
								<span className="bet-one-money-num format_currency">{betInLength}</span>
							</div>
						</div>
						<div className="form-group">
							<div className="bet-one-money">
								<span className="bet-one-money-text">Tiền thắng / 1 con</span>
								<span className="bet-one-money-num format_currency">{winnerBet}</span>
							</div>
						</div>
					</div>
					<input type="submit" value="Đặt cược" className="btn-danhde"/>
				</div>
			</div>
		</div>
	);
};

export default ViewBetInputSubmit;