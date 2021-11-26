import React, { lazy, Suspense } from 'react';
import {Route, Switch} from "react-router-dom";
import AuthenticatedGuard from "../guards/AuthenticatedGuard";
import HomePage from "../lode/pages/HomePage";

const HomeRoutes = () => {
	return (
		<Switch>
			<Route exact path={'/'}>
				<HomePage/>
			</Route>
		</Switch>
	);
};

export default HomeRoutes;