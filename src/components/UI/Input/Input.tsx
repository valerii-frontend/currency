import React, { FC, InputHTMLAttributes, useState } from "react";
import styles from "./Input.module.css";

interface InputProps {
	label: string;
	id: string;
	placeholder?: string;
}

const Input: FC<InputProps> = ({ placeholder, id, label }) => {
	const [inputText, setInputText] = useState<string>("");
	const [inputError, setInputError] = useState<boolean>(false);

	const onBlurHandler = (): void => {
		inputText.match(/[a-zA-Z]+/g) ? setInputError(true) : setInputError(false);
	};

	return (
		<div className={`${styles.input} ${inputError ? styles.invalid : ""}`}>
			<input
				placeholder={placeholder}
				id={id}
				value={inputText}
				onChange={(e) => setInputText(e.target.value)}
				onBlur={onBlurHandler}
			/>
			<label htmlFor={id}>{label}</label>
		</div>
	);
};
export default Input;
