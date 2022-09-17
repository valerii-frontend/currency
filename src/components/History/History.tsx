import { FC } from "react";
import styles from "./History.module.css";

interface HistoryProps {
	historyExchange: any;
	isPage?: boolean;
}

const History: FC<HistoryProps> = ({ historyExchange, isPage }) => {
	return (
		<div className={isPage ? styles.page : styles.wrap}>
			{historyExchange.length === 0 && <h2>Brak wcześniejszych konwersji</h2>}
			{historyExchange.length !== 0 && (
				<table className={styles.history}>
					<thead>
						<tr>
							<th>{isPage ? "Data ta czas" : "Data"}</th>
							{isPage && <th>Kurs</th>}
							<th>Przed konwersja</th>
							<th>Po konwersji</th>
						</tr>
					</thead>
					<tbody>
						{historyExchange.map((e: any) => (
							<tr key={`${e.from}${Math.random()}`}>
								<td>
									{e.data}
									{isPage && <small> - {e.time}</small>}
								</td>
								{isPage && <td>{e.course}</td>}
								<td>{e.from}</td>
								<td>{e.to}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default History;
