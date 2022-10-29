import * as React from 'react';
import renderer from 'react-test-renderer';
import HomePage from './HomePage';
import { MockedUser1 } from '../../mock/mockedUser';

jest.mock('../../api/getUsers', () => ({
	getUsers: jest.fn().mockReturnValue(() => [MockedUser1]),
}));

jest.mock('axios');

describe('HomePage component', () => {
	it('should renders', () => {
		const wrapper = renderer.create(<HomePage />).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
});
