import React, { useState, useEffect } from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Input from "./components/Input/Input";
import Select from "./components/Select/Select";
import arrowsIcon from "./assets/change.svg";
import axios from "axios";

function App() {
	const [error, setError] = useState<boolean>(true);
	const [options, setOptions] = useState<string[]>(["USD", "EUR", "UAH"]);
	const [labelFrom, setLabelFrom] = useState<string>("USD");
	const [labelTo, setLabelTo] = useState<string>("USD");
	const [orders, setOrders] = useState({ from: [1, "z"], to: [3, "na"] });
	const changeFromToHandler = () => {
		let [from, to] = [labelFrom, labelTo];
		setLabelFrom(to);
		setLabelTo(from);
	};

	useEffect(() => {
		const response = axios
			.request({
				method: "GET",
				url: "https://currency-exchange.p.rapidapi.com/listquotes",
				headers: {
					"X-RapidAPI-Key": "d4bd4e8105msh5b7f653cf42b9abp11fc9ajsn6abd8a0a8301",
					"X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
				},
			})
			.then(function (response) {
				setOptions(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);

	return (
		<div className='App'>
			<Card title='Konwerter walut'>
				<div className='row'>
					<div className='col'>
						<Select title='Przelicz z' options={options} setLabel={setLabelFrom} order={1}></Select>
						<div className='change'>
							<img src={arrowsIcon} alt='change icon' onClick={changeFromToHandler} />
						</div>
						<Select title='Przelicz na' options={options} setLabel={setLabelTo} order={3}></Select>
					</div>
					<div className='col'>
						<Input id='from' label={labelFrom} name='Kwota' placeholder='Wpisz kwote' error={setError} />
						<Input id='to' label={labelTo} name='Wynik' placeholder='Wynik' disabled />
					</div>
				</div>
				<div className='controls'>
					<Button view='secondary'>Ukryj historię</Button>
					<Button disabled={error}>Konwertuj</Button>
				</div>
			</Card>
		</div>
	);
}

export default App;
