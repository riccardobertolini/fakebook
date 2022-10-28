import axios from 'axios';
import { APIUserResult, User } from '../models/User';

export const getUsers = async () => {
	try {
		const { data } = await axios.get<APIUserResult>(`https://randomuser.me/api?results=10`, {
			headers: {
				Accept: 'application/json',
			},
		});
		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			return error.message;
		} else {
			return 'An unexpected error occurred';
		}
	}
};
