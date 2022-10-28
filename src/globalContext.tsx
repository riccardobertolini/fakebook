import { createContext, useContext } from 'react';
import { User } from './models/User';

export type GlobalContent = {
	users: User[];
	updateUsers: (value: User[]) => void;
};

export const GlobalContext = createContext<GlobalContent>({
	users: [],
	updateUsers: users => users,
});
export const useGlobalContext = () => useContext(GlobalContext);
