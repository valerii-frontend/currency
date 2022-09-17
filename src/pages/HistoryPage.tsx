import React, { PropsWithChildren, FC, useState } from "react";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import History from "../components/History/History";

const HistoryPage: FC<PropsWithChildren> = () => {
	const [thisHistory, setThisHistory] = useState(JSON.parse(localStorage.getItem("history") || "[]"));

	return (
		<Card title='Historia'>
			<History isPage historyExchange={thisHistory} />
			<div className='controls'>
				<Button
					view='secondary'
					onClick={() => {
						window.localStorage.removeItem("history");
						setThisHistory([]);
					}}>
					Wyczyść historię
				</Button>
			</div>
		</Card>
	);
};

export default HistoryPage;
