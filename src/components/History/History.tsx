import { FC } from "react";
import styles from "./History.module.css";

const History: FC = () => {
	return (
		<div className={styles.wrap}>
			<table className={styles.history}>
				<thead>
					<tr>
						<th>Company</th>
						<th>Contact</th>
						<th>Country</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Alfreds Futterkiste</td>
						<td>Maria Anders</td>
						<td>Germany</td>
					</tr>
					<tr>
						<td>Centro comercial Moctezuma</td>
						<td>Francisco Chang</td>
						<td>Mexico</td>
					</tr>
					<tr>
						<td>Alfreds Futterkiste</td>
						<td>Maria Anders</td>
						<td>Germany</td>
					</tr>
					<tr>
						<td>Centro comercial Moctezuma</td>
						<td>Francisco Chang</td>
						<td>Mexico</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default History;
