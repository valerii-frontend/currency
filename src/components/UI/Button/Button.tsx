import React, { FC, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	view?: "secondary" | "primary";
}

const Button: FC<ButtonProps> = ({ children, view, disabled }) => {
	const btnStyles = `${styles.btn} ${view === "secondary" ? styles.secondary : styles.primary} `;

	return (
		<button disabled={disabled} className={btnStyles}>
			{children}
		</button>
	);
};
export default Button;
