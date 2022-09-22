import React, { PropsWithChildren, FC, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import History from "../components/History/History";

const HistoryPage: FC<PropsWithChildren> = () => {
	const [thisHistory, setThisHistory] = useState(JSON.parse(localStorage.getItem("history") || "[]"));

	return (
		<Card title='History'>
			<History isPage historyExchange={thisHistory} />
			<div className='controls'>
				<Button view='secondary'>
					<NavLink className='backLink' to={"/"}>
						Main page
					</NavLink>
				</Button>
				<Button
					onClick={() => {
						window.localStorage.removeItem("history");
						setThisHistory([]);
					}}>
					Clear history
				</Button>
			</div>
		</Card>
	);
};

export default HistoryPage;
