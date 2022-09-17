import React, { useState, useEffect, PropsWithChildren, FC } from "react";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import Input from "../components/Input/Input";
import Select from "../components/Select/Select";
import arrowsIcon from "../assets/change.svg";
import axios from "axios";
import ErrorScreen from "../components/ErrorScreen/ErrorScreen";
import History from "../components/History/History";

const MainPage: FC<PropsWithChildren> = ({ children }) => {
	const [errorInput, setErrorInput] = useState<boolean>(true);
	const [options, setOptions] = useState<string[]>(["USD", "EUR", "UAH"]);
	const [labelFrom, setLabelFrom] = useState<string>("USD");
	const [labelTo, setLabelTo] = useState<string>("USD");
	const [inputsValues, setInputsValues] = useState<{ from: string; to: string }>({ from: "", to: "" });
	const [closeError, setCloseError] = useState<boolean>(false);
	const [fetchError, setFetchError] = useState<string[]>(["", ""]);
	const [isHistory, setIsHistory] = useState<boolean>(false);
	const checkTheStorage = JSON.parse(localStorage.getItem("history") || "[]");
	const [historyExchange, setHistoryExchange] = useState<Array<any>>([...checkTheStorage]);

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
				setInputsValues((p) => ({ ...p, to: "" }));
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
				let date = new Date();
				let day = `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
				let month = `${date.getMonth() < 9 ? "0" + (+date.getMonth() + 1) : +date.getMonth() + 1}`;
				let hour = `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}`;
				let min = `${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;
				interface exchangeData {
					data: string;
					time: string;
					from: string;
					to: string;
					course: string;
				}
				let exchange: exchangeData[] = [
					{
						data: `${day}.${month}.${date.getFullYear()}`,
						time: `${hour}:${min}`,
						from: `${inputsValues.from} ${fromCur}`,
						to: `${amount} ${toCur}`,
						course: `1 ${fromCur} = ${response.data.toFixed(2)} ${toCur}`,
					},
				];

				setHistoryExchange((p) => [...exchange, ...p]);
				localStorage.setItem("history", JSON.stringify(historyExchange));
			})
			.catch(function (error) {
				setFetchError([error.message, error.code]);
				setCloseError(true);
				setInputsValues((p) => ({ ...p, to: "" }));
			});
	}

	return (
		<div>
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
					{errorInput && <span></span>}
				</div>
				{isHistory && <History historyExchange={historyExchange}></History>}
			</Card>
		</div>
	);
};

export default MainPage;
