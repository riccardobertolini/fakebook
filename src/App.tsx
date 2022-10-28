import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './layouts/HomePage/HomePage';
import Profile from './layouts/Profile/Profile';
import { GlobalContext } from './globalContext';
import { User } from './models/User';
import { Logo, NavBar, Root } from './App.styles';
import { Quote } from './models/Quotes';

function App() {
	const [users, updateUsers] = useState<User[]>([]);

	return (
		<Root>
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
		</Root>
	);
}

export default App;
