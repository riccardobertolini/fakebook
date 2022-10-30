import { createContext, useContext } from 'react';
import { User } from './models/User';
import { Quote } from './models/Quotes';

export type GlobalContent = {
	users: User[];
	updateUsers: (value: User[]) => void;
	userPosts: Array<string>;
	updateUserPosts: (value: Array<string>) => void;
	quotesData: Quote[];
	updateQuotesData: (value: Quote[]) => void;
};

export const GlobalContext = createContext<GlobalContent>({
	users: [],
	updateUsers: users => users,
	userPosts: [],
	updateUserPosts: posts => posts,
	quotesData: [],
	updateQuotesData: quote => quote,
});
export const useGlobalContext = () => useContext(GlobalContext);
