import React, { useEffect, useState } from 'react';
import { APIUserResult, User } from './models/User';
import { getUsers } from './api/getUsers';
import { UserTile } from './components/UserTile/UserTile';
import { SocialWall, Body } from './App.styles';

function App() {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);
	const [page, setPage] = useState<number>(1);
	const [userList, updateUserList] = useState<User[]>([]);

	useEffect(() => {
		const fetchUsers = async () => {
			setLoading(true);
			const fetchedUsers: string | APIUserResult = await getUsers();
			if (typeof fetchedUsers !== 'string') {
				updateUserList([...userList, ...fetchedUsers.results]);
			} else {
				setError(true);
			}
			setLoading(false);
		};

		fetchUsers();
	}, [page]);

	if (loading && userList.length === 0) return <div>loading...</div>;

	if (error) return <div>error, sorry!</div>;

	return (
		<Body>
			<SocialWall>
				{userList?.map((user, index) => (
					<UserTile user={user} index={index} />
				))}
				{loading && userList.length !== 0 && <div>loading...</div>}
				<div onClick={() => setPage(page + 1)}>Show More</div>
			</SocialWall>
		</Body>
	);
}

export default App;
