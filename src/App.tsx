import React, { useEffect, useState } from 'react';
import './App.css';
import { APIUserResult, User } from './models/User';
import { getUsers } from './api/getUsers';

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

	if (loading) return <div>loading...</div>;

	if (error) return <div>error, sorry!</div>;

	return (
		<div className="App">
			Users:
			{userList?.map(item => (
				<div>
					{item.name.first} {item.name.last}
				</div>
			))}
			<hr />
			Current page: {page}
			<br />
			<div onClick={() => setPage(page + 1)}>Show More</div>
		</div>
	);
}

export default App;
