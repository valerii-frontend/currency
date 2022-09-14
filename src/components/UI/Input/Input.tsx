import React, { FC, useState } from "react";
import styles from "./Input.module.css";

interface InputProps {
	label: string;
	id: string;
	placeholder?: string;
	name: string;
}

const Input: FC<InputProps> = ({ placeholder, id, label, name }) => {
	const [inputText, setInputText] = useState<string>("");
	const [inputError, setInputError] = useState<boolean>(false);

	const onBlurHandler = (): void => {
		inputText.match(/[a-zA-Z]+/g) ? setInputError(true) : setInputError(false);
	};
	const onFocusHandler = (): void => {
		inputText.match(/[a-zA-Z]+/g) ? setInputText("") : setInputText(inputText);
		setInputError(false);
	};

	return (
		<div className={`${styles.input} ${inputError ? styles.invalid : ""}`}>
			<label className={styles.title} htmlFor={id}>
				{name}
			</label>
			<input
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
