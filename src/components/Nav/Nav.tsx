import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Nav() {
	const { pathname } = useLocation();
	return (
		<nav>
			<ul>
				<li className={pathname === "/" ? "active" : ""}>
					<NavLink to={"/"}>Konwerter</NavLink>
				</li>
				<li className={pathname === "/history" ? "active" : ""}>
					<NavLink to={"/history"}>Historia rozszerzona</NavLink>
				</li>
			</ul>
		</nav>
	);
}
