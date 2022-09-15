import React from "react";
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";
import Input from "./components/UI/Input/Input";
import Select from "./components/UI/Select/Select";

// b20a60cec7-107d28d747-ri7x5k
const optionsArr = [{ name: "PLN" }, { name: "USD" }, { name: "UAH" }, { name: "RUB" }, { name: "EUR" }];
function App() {
	return (
		<div className='App'>
			<Card title='Konwerter walut'>
				<div style={{ display: "flex" }}>
					<Input id='from' label='PLN' name='Kwota' placeholder='Wpisz kwote' />
					<Input id='to' label='USD' name='Wynik' placeholder='Wynik' disabled />
				</div>
				<div style={{ display: "flex" }}>
					<Button view='secondary'>Ukryj historię</Button>
					<Button>Konwertuj</Button>
					<Select title='Przelicz z' options={optionsArr}></Select>
					<Select title='Przelicz na' options={optionsArr}></Select>
				</div>
			</Card>
		</div>
	);
}

export default App;
