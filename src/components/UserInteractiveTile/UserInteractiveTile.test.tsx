import renderer from 'react-test-renderer';
import { UserInteractiveTile } from './UserInteractiveTile';
import * as React from 'react';
import { MockedUser1 } from '../../mock/mockedUser';

jest.mock('../../globalContext', () => ({
	useGlobalContext: () => ({ users: [MockedUser1, MockedUser1, MockedUser1, MockedUser1] }),
}));

describe('UserInteractiveTile', () => {
	afterEach(() => {
		jest.clearAllMocks();
		jest.resetAllMocks();
	});

	it('should render', () => {
		const wrapper = renderer.create(<UserInteractiveTile />).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
});
