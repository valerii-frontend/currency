import React, { FC, useState } from "react";
import styles from "./Select.module.css";

interface SelectProps {
	options: string[];
	title: string;
	setLabel?: any;
	changeValue?: string;
	label: string;
}

const Select: FC<SelectProps> = ({ options, title, setLabel, label }) => {
	const [drop, setDrop] = useState<boolean>(false);

	const clickItemHandler = (e: React.BaseSyntheticEvent) => {
		setLabel(e.target.textContent);
	};

	const dropListHandler = () => {
		setDrop((p) => !p);
	};

	return (
		<div className={styles.item}>
			<p className={styles.title}>{title}</p>
			<div className={`${styles.select} ${drop ? styles.open : ""}`} onClick={dropListHandler}>
				<span className={styles.current}>{label}</span>
				<div className={styles.dropdown}>
					<ul>
						{options.map((option) => (
							<li key={option} id={option} onClick={clickItemHandler}>
								{option}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
export default Select;
