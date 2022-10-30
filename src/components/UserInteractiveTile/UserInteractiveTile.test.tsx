import renderer from 'react-test-renderer';
import { UserInteractiveTile } from './UserInteractiveTile';
import * as React from 'react';
import { Dispatch } from 'react';
import { act } from '@testing-library/react';
import { MockedUser1 } from '../../mock/mockedUser';
import SpyInstance = jest.SpyInstance;

jest.mock('react', () => ({
	...jest.requireActual('react'),
}));

jest.mock('../../globalContext', () => ({
	useGlobalContext: () => ({ users: [MockedUser1, MockedUser1, MockedUser1, MockedUser1] }),
}));

describe('UserInteractiveTile', () => {
	let mockedSpy: SpyInstance<[unknown, Dispatch<unknown>], []>;

	beforeEach(() => {
		mockedSpy = jest.spyOn(React, 'useState');
	});

	it('should render', () => {
		const wrapper = renderer.create(<UserInteractiveTile />).toJSON();
		expect(wrapper).toMatchSnapshot();
	});

	it('should update the state if user write inside the component', () => {
		const wrapper = renderer.create(<UserInteractiveTile />).root;

		act(() => {
			const input = wrapper.findByType('input');
			input.props.onChange({ target: { value: 'hello' } });
		});

		expect(mockedSpy).toHaveBeenCalled();
	});

	it('should submit the content if user submit with keyboard or button', () => {
		const wrapper = renderer.create(<UserInteractiveTile />).root;

		act(() => {
			const input = wrapper.findByType('input');
			input.props.onKeyDown({ key: 'Enter' });
		});

		expect(mockedSpy).toHaveBeenCalled();
	});
});
