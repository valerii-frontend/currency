import { FC } from "react";
import styles from "./History.module.css";

interface HistoryProps {
	historyExchange: any;
}

const History: FC<HistoryProps> = ({ historyExchange }) => {
	return (
		<div className={styles.wrap}>
			{historyExchange.length === 0 && <h2 style={{ textAlign: "center" }}>Historia jest pusta</h2>}
			{historyExchange.length !== 0 && (
				<table className={styles.history}>
					<thead>
						<tr>
							<th>Data</th>
							<th>Przed konwersja</th>
							<th>Po konwersji</th>
						</tr>
					</thead>
					<tbody>
						{historyExchange.map((e: any) => (
							<tr key={`${e.from}${Math.random()}`}>
								<td>{e.data}</td>
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
