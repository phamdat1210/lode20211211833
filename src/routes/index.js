import {
	HashRouter as Router,
} from "react-router-dom";
import React from 'react';
import HomeRoutes from "./HomeRoutes";
const RootRoutes = () => {
	return (
		<Router>
			<HomeRoutes/>
		</Router>
	);
};

export default RootRoutes;