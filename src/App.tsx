import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './layouts/HomePage/HomePage';
import Profile from './layouts/Profile/Profile';
import { GlobalContext } from './globalContext';
import { User } from './models/User';
import { SideChatUsers, Logo, NavBar, Root, SideChat, UserStatus, UserThumbnail, InnerThumbnail, BodyComponent } from './App.styles';
import { SocialWallTile } from './components/UserTile/UserTile.styles';
import { RightSideBar } from './components/RightSideBar/RightSideBar';

function App() {
	const [users, updateUsers] = useState<User[]>([]);

	return (
		<Root>
			<GlobalContext.Provider value={{ users, updateUsers }}>
				<NavBar>
					<Logo to={'/'}>
						<span>Fake</span>Book
					</Logo>
				</NavBar>
				<BodyComponent>
					<SideChat>
						<SocialWallTile>
							<SideChatUsers>
								{users &&
									users.map((user, index) => (
										<UserThumbnail key={`${user.id.value}${index}`}>
											<InnerThumbnail to={`/${user.login.uuid}`}>
												<UserStatus active={Math.random() < 0.5} />
												<img src={user.picture.thumbnail} alt="" />

												{user.name.first}
											</InnerThumbnail>
										</UserThumbnail>
									))}
							</SideChatUsers>
						</SocialWallTile>
					</SideChat>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/:userSlug" element={<Profile />} />
					</Routes>
					<RightSideBar />
				</BodyComponent>
			</GlobalContext.Provider>
		</Root>
	);
}

export default App;
