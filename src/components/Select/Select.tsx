import React, { FC, useState } from "react";
import styles from "./Select.module.css";

interface SelectProps {
	options: string[];
	title: string;
	setLabel?: any;
	changeValue?: string;
	order: number;
}

const Select: FC<SelectProps> = ({ options, title, setLabel, order }) => {
	const [selectValue, setSelectValue] = useState<string>("USD");
	const [drop, setDrop] = useState<boolean>(false);

	const clickItemHandler = (e: React.BaseSyntheticEvent) => {
		setSelectValue(e.target.textContent);
		setLabel(e.target.textContent);
	};

	const dropListHandler = () => {
		setDrop((p) => !p);
	};

	return (
		<div className={styles.item} style={{ order: order }}>
			<p className={styles.title}>{title}</p>
			<div className={`${styles.select} ${drop ? styles.open : ""}`} onClick={dropListHandler}>
				<span className={styles.current}>{selectValue}</span>
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
