import React, { FC, useState } from "react";
import styles from "./Input.module.css";

interface InputProps {
	label: string;
	id: string;
	placeholder?: string;
	name: string;
	disabled?: boolean;
	error?: any;
}

const Input: FC<InputProps> = ({ placeholder, id, label, name, disabled, error }) => {
	const [inputText, setInputText] = useState<string>("");
	const [inputError, setInputError] = useState<boolean>(false);

	const onBlurHandler = (): void => {
		let check = inputText.match(/[a-zA-Z]+/g);
		if (check) {
			setInputError(true);
		} else if (check || !inputText) {
			error(true);
		} else {
			setInputError(false);
			error(false);
		}
	};
	const onFocusHandler = (): void => {
		let check = inputText.match(/[a-zA-Z]+/g);
		if (check) {
			setInputText("");
		} else if (check || !inputText) {
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
				value={inputText}
				onChange={(e) => setInputText(e.target.value)}
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
