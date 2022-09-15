import React, { FC, useState } from "react";
import styles from "./Select.module.css";

interface SelectProps {
	options: Option[];
	title: string;
}

interface Option {
	name: string;
}

const Select: FC<SelectProps> = ({ options, title }) => {
	const [selectValue, setSelectValue] = useState<string>("PLN");
	const [drop, setDrop] = useState<boolean>(false);

	const clickItemHandler = (e: any) => {
		console.log(e.target.textContent);
		setSelectValue(e.target.textContent);
	};

	const dropListHandler = () => {
		setDrop((p) => !p);
	};
	return (
		<div className={styles.item}>
			<p className={styles.title}>{title}</p>
			<div className={`${styles.select} ${drop ? styles.open : ""}`} onClick={dropListHandler}>
				<span className={styles.current}>{selectValue}</span>
				<div className={styles.dropdown}>
					<ul>
						{options.map((option) => (
							<li key={option.name} id={option.name} onClick={clickItemHandler}>
								{option.name}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
export default Select;
