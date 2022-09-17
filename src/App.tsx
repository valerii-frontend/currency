import React from "react";
import MainPage from "./pages/MainPage";
import HistoryPage from "./pages/HistoryPage";
import { BrowserRouter, Route, Routes, Navigate, NavLink } from "react-router-dom";
function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<nav>
					<ul>
						<li>
							<NavLink to={"/"}>Konwerter</NavLink>
						</li>
						<li>
							<NavLink to={"/history"}>Historia rozszerzona</NavLink>
						</li>
					</ul>
				</nav>
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
