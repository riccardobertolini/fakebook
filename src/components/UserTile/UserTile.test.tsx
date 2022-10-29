import * as React from 'react';
import renderer from 'react-test-renderer';
import { UserTile } from './UserTile';
import { MockedUser1 } from '../../mock/mockedUser';

jest.mock('axios');

jest.mock('react-router-dom', () => ({
	Routes: jest.fn(),
	Route: jest.fn(),
	Link: jest.fn(),
}));

describe('UserTile component', () => {
	it('should renders', () => {
		const wrapper = renderer.create(<UserTile user={MockedUser1} index={0} />).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
});
