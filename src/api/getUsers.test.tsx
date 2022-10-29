import axios from 'axios';
import { getUsers } from './getUsers';
import { MockedUser1 } from '../mock/mockedUser';

jest.mock('axios', () => ({
	get: jest.fn(),
}));

describe('getUsers function', () => {
	it('should fetches successfully data and return it', async () => {
		const mockedData = [MockedUser1];

		axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({ data: mockedData }));

		await expect(getUsers()).resolves.toBe(mockedData);
	});

	it('should return a message if there was an error', async () => {
		const errorMessage = 'An unexpected error occurred';

		axios.get = jest.fn().mockImplementationOnce(() => Promise.reject());

		await expect(getUsers()).resolves.toBe(errorMessage);
	});
});
