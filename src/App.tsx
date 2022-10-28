import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './layouts/HomePage/HomePage';
import Profile from './layouts/Profile/Profile';
import { GlobalContext } from './globalContext';
import { User } from './models/User';
import { Logo, NavBar } from './App.styles';

function App() {
	const [users, updateUsers] = useState<User[]>([]);
	return (
		<>
			<GlobalContext.Provider value={{ users, updateUsers }}>
				<NavBar>
					<Logo>
						<span>Fake</span>Book
					</Logo>
				</NavBar>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/:userSlug" element={<Profile />} />
				</Routes>
			</GlobalContext.Provider>
		</>
	);
}

export default App;
