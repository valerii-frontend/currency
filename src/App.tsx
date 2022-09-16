import React, { useState, useEffect } from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Input from "./components/Input/Input";
import Select from "./components/Select/Select";
import arrowsIcon from "./assets/change.svg";
import axios from "axios";
import ErrorScreen from "./components/ErrorScreen/ErrorScreen";

function App() {
	const [errorInput, setErrorInput] = useState<boolean>(false);
	const [options, setOptions] = useState<string[]>(["USD", "EUR", "UAH"]);
	const [labelFrom, setLabelFrom] = useState<string>("USD");
	const [labelTo, setLabelTo] = useState<string>("USD");
	const [inputsValues, setInputsValues] = useState<{ from: string; to: string }>({ from: "", to: "" });
	const [closeError, setCloseError] = useState<boolean>(false);
	const [fetchError, setFetchError] = useState<string[]>(["", ""]);
	const [isHistory, setIsHistory] = useState<boolean>(false);

	const changeFromToHandler = () => {
		let [from, to] = [labelFrom, labelTo];
		setLabelFrom(to);
		setLabelTo(from);
		setInputsValues((p) => ({ ...p, to: "" }));
	};
	const convertHandler = () => {
		convert(labelFrom, labelTo);
	};

	// Get currency list
	useEffect(() => {
		axios
			.request({
				method: "GET",
				url: "https://currency-exchange.p.rapidapi.com/listquotes",
				headers: {
					"X-RapidAPI-Key": "d4bd4e8105msh5b7f653cf42b9abp11fc9ajsn6abd8a0a8301",
					"X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
				},
			})
			.then(function (response) {
				setOptions(["PLN", "UAH", ...response.data]);
			})
			.catch(function (error) {
				setFetchError([error.message, error.code]);
				setCloseError(true);
			});
	}, []);
	function convert(fromCur: string, toCur: string) {
		const options = {
			method: "GET",
			url: "https://currency-exchange.p.rapidapi.com/exchange",
			params: { from: fromCur, to: toCur },
			headers: {
				"X-RapidAPI-Key": "d4bd4e8105msh5b7f653cf42b9abp11fc9ajsn6abd8a0a8301",
				"X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
			},
		};

		axios
			.request(options)
			.then(function (response) {
				let amount = String((response.data * +inputsValues.from).toFixed(2));
				setInputsValues((p) => ({ ...p, to: amount }));
			})
			.catch(function (error) {
				setFetchError([error.message, error.code]);
				setCloseError(true);
			});
	}

	return (
		<div className='App'>
			{closeError && <ErrorScreen errorText={fetchError} close={setCloseError} />}
			<Card title='Konwerter walut'>
				<div className='row'>
					<div className='col'>
						<Select title='Przelicz z' options={options} setLabel={setLabelFrom} label={labelFrom}></Select>
						<div className='change'>
							<img src={arrowsIcon} alt='change icon' onClick={changeFromToHandler} />
						</div>
						<Select title='Przelicz na' options={options} setLabel={setLabelTo} label={labelTo}></Select>
					</div>
					<div className='col'>
						<Input
							id='from'
							label={labelFrom}
							name='Kwota'
							placeholder='Wpisz kwote'
							error={setErrorInput}
							value={inputsValues.from}
							setInputsValues={setInputsValues}
						/>
						<Input id='to' label={labelTo} name='Wynik' placeholder='Wynik' disabled value={inputsValues.to} />
					</div>
				</div>
				<div className='controls'>
					<Button view='secondary' onClick={() => setIsHistory((p) => !p)}>
						<span style={{ opacity: `${isHistory ? 1 : 0}` }}>Ukryj historię</span>{" "}
						<span className='historyLabel' style={{ opacity: `${isHistory ? 0 : 1}` }}>
							Historia
						</span>
					</Button>
					<Button disabled={errorInput} onClick={convertHandler}>
						Konwertuj
					</Button>
				</div>
			</Card>
		</div>
	);
}

export default App;
