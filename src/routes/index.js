import {
	HashRouter as Router,
} from "react-router-dom";
import React from 'react';
import HomeRoutes from "./HomeRoutes";
import LotteryRoutes from "./LotteryRoutes";
const RootRoutes = () => {
	return (
		<Router>
			<HomeRoutes/>
			<LotteryRoutes/>
		</Router>
	);
};

export default RootRoutes;