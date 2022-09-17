import React from "react";
import MainPage from "./pages/MainPage";
import HistoryPage from "./pages/HistoryPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Nav from "./components/Nav/Nav";
function App() {
	return (
		<BrowserRouter>
			<Nav />
			<div className='App'>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/history' element={<HistoryPage />} />
					<Route path='*' element={<Navigate to='/' replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
