import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Nav() {
	const { pathname } = useLocation();
	return (
		<nav>
			<ul>
				<li className={pathname === "/" ? "active" : ""}>
					<NavLink to={"/"}>Main page</NavLink>
				</li>
				<li className={pathname === "/history" ? "active" : ""}>
					<NavLink to={"/history"}>History details</NavLink>
				</li>
			</ul>
		</nav>
	);
}
