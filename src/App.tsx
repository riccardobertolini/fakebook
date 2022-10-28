import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './layouts/HomePage/HomePage';
import Profile from './layouts/Profile/Profile';

function App() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/:username" element={<Profile />} />
			</Routes>
		</>
	);
}

export default App;
