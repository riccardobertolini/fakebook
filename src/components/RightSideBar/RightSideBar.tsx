import { RightSideMenu, SideSection, Accordion, AccordionText } from './RightSideBar.styles';
import { AiOutlineGift, AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import React, { useState } from 'react';
import { useGlobalContext } from '../../globalContext';
import { User } from '../../models/User';

export const generateRandomBirthday = (users: User[], index: number) => {
	return `Today is ${users[index].name.first}'s Birthday`;
};

export const RightSideBar = () => {
	const { users } = useGlobalContext();
	const [accordionOpen, setAccordionStatus] = useState(false);

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
			<SideSection>
				<Accordion onClick={() => setAccordionStatus(!accordionOpen)}>
					<h3>
						How does it work? <span>{!accordionOpen ? <AiOutlineDown /> : <AiOutlineUp />}</span>
					</h3>
				</Accordion>
				<AccordionText accordionOpen={accordionOpen}>
					On this project, I'm using React Hooks like useContext, useState, useEffect to achieve a smoother user experience. <br />
					The User API returns randomly generated users, so to handle the profile view, I'm "caching" the first call that happens when the user opens the page in a custom UseContext hook. <br />
					For this reason, if a user lands refreshing on the URL generated for the profile, it will be redirected to the homepage, where a new API call will be submitted. <br />
					All the design has been manually written using styled-components. A natural next step for this project would be wrapping the React app in a Next.js framework, to cache the API calls, setting
					login logic and server-side render.
				</AccordionText>
			</SideSection>
		</RightSideMenu>
	) : null;
};
