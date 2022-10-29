import renderer from 'react-test-renderer';
import React from 'react';
import Profile from './Profile';
import { MockedUser1 } from '../../mock/mockedUser';

let mockedUsedNavigate: () => void;

jest.mock('react-router-dom', () => {
	return {
		...jest.requireActual('react-router-dom'),
		Link: jest.fn(),
		useParams: () => ({
			userSlug: '71d3d4bf-2c47-450f-b3bf-e15a7fef23da',
		}),
		Navigate: jest.fn().mockReturnValueOnce(() => {
			mockedUsedNavigate = jest.fn();
			return mockedUsedNavigate;
		}),
	};
});

jest.mock('../../globalContext', () => ({
	useGlobalContext: () => ({
		users: [MockedUser1],
	}),
}));

describe('Profile component', () => {
	it('should render the user profile component', () => {
		const wrapper = renderer.create(<Profile />).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
});
