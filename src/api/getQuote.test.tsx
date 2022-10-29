import axios from 'axios';
import { getQuotes } from './getQuote';
import { MockedUser1 } from '../mock/mockedUser';

jest.mock('axios', () => ({
	get: jest.fn(),
}));

describe('getQuotes function', () => {
	it('should fetches successfully data from an API', async () => {
		const mockedData = [MockedUser1];

		axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({ data: mockedData }));

		await expect(getQuotes()).resolves.toBe(mockedData);
	});
});
