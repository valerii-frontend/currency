import React, { PropsWithChildren, FC } from "react";
import Card from "../components/Card/Card";
import History from "../components/History/History";

const HistoryPage: FC<PropsWithChildren> = () => {
	const arr = [
		{ "data": "17.09.2022", "from": "40 USD", "to": "56.25 SGD", "course": "1 USD = 1.41 SGD" },
		{ "data": "17.09.2022", "from": "40 USD", "to": "40.00 USD", "course": "1 USD = 1.00 USD" },
		{ "data": "17.09.2022", "from": "40 USD", "to": "40.00 USD", "course": "1 USD = 1.00 USD" },
		{ "data": "17.09.2022", "from": "40 USD", "to": "40.00 USD", "course": "1 USD = 1.00 USD" },
		{ "data": "17.09.2022", "from": "40 USD", "to": "40.00 USD", "course": "1 USD = 1.00 USD" },
		{ "data": "17.09.2022", "from": "40 USD", "to": "40.00 USD", "course": "1 USD = 1.00 USD" },
		{ "data": "17.09.2022", "from": "40 USD", "to": "40.00 USD", "course": "1 USD = 1.00 USD" },
		{ "data": "17.09.2022", "from": "40 USD", "to": "40.00 USD", "course": "1 USD = 1.00 USD" },
		{ "data": "17.09.2022", "from": "40 USD", "to": "40.00 USD", "course": "1 USD = 1.00 USD" },
		{ "data": "17.09.2022", "from": "40 USD", "to": "40.00 USD", "course": "1 USD = 1.00 USD" },
		{ "data": "17.09.2022", "from": "40 USD", "to": "40.00 USD", "course": "1 USD = 1.00 USD" },
	];
	return (
		<Card title='Historia'>
			<History isPage historyExchange={arr} />
		</Card>
	);
};

export default HistoryPage;
