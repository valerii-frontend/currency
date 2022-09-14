import React, { FC } from "react";

interface SelectProps {
	options: React.ReactElement[];
}

const Select: FC<SelectProps> = ({ options }) => {
	return (
		<select>
			{options.map((option) => (
				<option>option.name</option>
			))}
		</select>
	);
};
export default Select;
