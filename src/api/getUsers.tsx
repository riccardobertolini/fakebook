import { APIUserResult } from '../models/User';
import axios from 'axios';

export const getUsers = async () => {
	try {
		const { data } = await axios.get<APIUserResult>(`https://randomuser.me/api?results=10`, {
			headers: {
				Accept: 'application/json',
			},
		});
		return data;
	} catch {
		return 'An unexpected error occurred';
	}
};
