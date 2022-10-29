import { RightSideMenu, SideSection } from './RightSideBar.styles';
import { AiOutlineGift } from 'react-icons/ai';
import React from 'react';
import { useGlobalContext } from '../../globalContext';
import { User } from '../../models/User';

export const generateRandomBirthday = (users: User[], index: number) => {
	return `${Math.random() > 0.5 ? 'Tomorrow' : 'Today'} is ${users[index].name.first}'s Birthday`;
};

export const RightSideBar = () => {
	const { users } = useGlobalContext();

	return users.length > 0 ? (
		<RightSideMenu>
			<SideSection>
				<h3>Birthdays</h3>
				<div>
					<AiOutlineGift /> {generateRandomBirthday(users, 1)}
				</div>
				<div>
					<AiOutlineGift /> {generateRandomBirthday(users, 2)}
				</div>
				<div>
					<AiOutlineGift /> {generateRandomBirthday(users, 3)}
				</div>
			</SideSection>
		</RightSideMenu>
	) : null;
};
