import React, { FC, PropsWithChildren } from "react";
import styles from "./Card.module.css";

interface CardProps extends PropsWithChildren {
	title: string;
}

const Card: FC<CardProps> = ({ children, title }) => {
	return (
		<div className={styles.card}>
			<h1>{title}</h1>
			{children}
		</div>
	);
};
export default Card;
