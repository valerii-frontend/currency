import React, { FC, useState } from "react";
import styles from "./Input.module.css";

interface InputProps {
	label: string;
	id: string;
	placeholder?: string;
	name: string;
	disabled?: boolean;
	error?: any;
	value?: string;
	setInputsValues?: any;
}

const Input: FC<InputProps> = ({ placeholder, id, label, name, disabled, error, value, setInputsValues }) => {
	const [inputText, setInputText] = useState<string>("");
	const [inputError, setInputError] = useState<boolean>(false);

	const onCheckHandler = (): void => {
		let check = !inputText.match(/\D/g);
		if (inputText === "") {
			error(true);
		} else if (!check) {
			setInputError(true);
			error(true);
		} else {
			setInputError(false);
			error(false);
		}
	};

	return (
		<div className={`${styles.input} ${inputError && styles.invalid}`}>
			<label className={styles.title} htmlFor={id}>
				{name}
			</label>
			<input
				maxLength={5}
				disabled={disabled}
				placeholder={placeholder}
				id={id}
				value={value ?? inputText}
				onChange={(e) => {
					setInputText(e.target.value);
					setInputsValues((p: { from: string; to: string }) => ({ ...p, from: e.target.value }));
				}}
				onBlur={onCheckHandler}
				onFocus={onCheckHandler}
			/>
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
		</div>
	);
};
export default Input;
