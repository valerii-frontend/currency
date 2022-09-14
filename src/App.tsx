import React from "react";
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";
import Input from "./components/UI/Input/Input";

// b20a60cec7-107d28d747-ri7x5k

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
				</div>
			</Card>
		</div>
	);
}

export default App;
