import React, { FC, HTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
	view?: "secondary" | "primary";
	disabled?: boolean;
	onclick?: any;
}

const Button: FC<ButtonProps> = (props) => {
	return (
		<div
			className={`${styles.btn} ${props.view === "secondary" ? styles.secondary : styles.primary} ${
				props.disabled ? styles.disabled : ""
			}`}
			onClick={props.onClick}>
			{props.children}
		</div>
	);
};
export default Button;
