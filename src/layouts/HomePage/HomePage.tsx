import React, { useEffect, useState } from 'react';
import { User } from '../../models/User';
import { getUsers } from '../../api/getUsers';
import { Body, SocialWall } from '../../App.styles';
import { UserTile } from '../../components/UserTile/UserTile';
import { useGlobalContext } from '../../globalContext';

const HomePage = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);
	const [page, setPage] = useState<number>(1);
	const [userList, updateUserList] = useState<User[]>([]);
	const { users, updateUsers } = useGlobalContext();

	useEffect(() => {
		const fetchUsers = async () => {
			if (page === 1 && users.length !== 0) {
				updateUserList(users);
			} else {
				setLoading(true);
				const fetchedUsers = await getUsers();
				if (typeof fetchedUsers !== 'string') {
					const updatedList = [...userList, ...fetchedUsers.results];
					updateUserList(updatedList);
					updateUsers(updatedList);
				} else {
					setError(true);
				}
				setLoading(false);
			}
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
};

export default HomePage;
