import React from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Input from "./components/Input/Input";
import Select from "./components/Select/Select";
import arrowsIcon from "./assets/change.svg";

// b20a60cec7-107d28d747-ri7x5k
const optionsArr = [{ name: "PLN" }, { name: "USD" }, { name: "UAH" }, { name: "RUB" }, { name: "EUR" }];
function App() {
	return (
		<div className='App'>
			<Card title='Konwerter walut'>
				<div className='row'>
					<div className='col'>
						<Select title='Przelicz z' options={optionsArr}></Select>
						<div className='change'>
							<img src={arrowsIcon} alt='change icon' />
						</div>
						<Select title='Przelicz na' options={optionsArr}></Select>
					</div>
					<div className='col'>
						<Input id='from' label='PLN' name='Kwota' placeholder='Wpisz kwote' />
						<Input id='to' label='USD' name='Wynik' placeholder='Wynik' disabled />
					</div>
				</div>
				<div className='controls'>
					<Button view='secondary'>Ukryj historię</Button>
					<Button>Konwertuj</Button>
				</div>
			</Card>
		</div>
	);
}

export default App;
