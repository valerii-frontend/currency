import React from "react";
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";
import Input from "./components/UI/Input/Input";

// b20a60cec7-107d28d747-ri7x5k

function App() {
	return (
		<div className='App'>
			<Card title='Konwerter walut'>
				<Button>Konwertuj</Button>
				<br />
				<Input id='currency' label='PLN' name='Kwota' />
			</Card>
		</div>
	);
}

export default App;
