import React from "react";
import styles from "./ErrorScreen.module.css";

export default function ErrorScreen({ errorText, close }: { errorText: string[]; close: any }) {
	return (
		<div className={styles.errorScreen}>
			<div className={styles.overlay}>
				<div className={styles.msg}>
					<div className={styles.close} onClick={() => close(false)}></div>
					<h3 className={styles.title}>{errorText[1]}</h3>
					<p>{errorText[0]}</p>
				</div>
			</div>
		</div>
	);
}
