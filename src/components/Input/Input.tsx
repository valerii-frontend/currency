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

	const onBlurHandler = (): void => {
		let check = !inputText.match(/\D/g);

		if (!check || inputText === "") {
			setInputError(true);
			error(true);
		} else {
			setInputError(false);
			error(false);
		}
	};
	const onFocusHandler = (): void => {
		let check = !inputText.match(/\D/g);
		if (!check || inputText === "") {
			setInputText("");
			error(true);
		} else {
			setInputText(inputText);
			error(false);
		}
		setInputError(false);
	};

	return (
		<div className={`${styles.input} ${inputError ? styles.invalid : ""}`}>
			<label className={styles.title} htmlFor={id}>
				{name}
			</label>
			<input
				disabled={disabled}
				placeholder={placeholder}
				id={id}
				value={value ? value : inputText}
				onChange={(e) => {
					setInputText(e.target.value);
					setInputsValues((p: { from: string; to: string }) => ({ ...p, from: e.target.value }));
				}}
				onBlur={onBlurHandler}
				onFocus={onFocusHandler}
			/>
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
		</div>
	);
};
export default Input;
