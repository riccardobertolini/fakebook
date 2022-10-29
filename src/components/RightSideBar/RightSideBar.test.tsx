import * as React from 'react';
import renderer from 'react-test-renderer';
import { RightSideBar } from './RightSideBar';
import { MockedUser1 } from '../../mock/mockedUser';
import axios from 'axios';
import * as context from '../../globalContext';

jest.mock('axios');

jest.mock('react-router-dom', () => ({
	Routes: jest.fn(),
	Route: jest.fn(),
	Link: jest.fn(),
}));

jest.mock('../../globalContext', () => ({
	useGlobalContext: () => ({ users: [MockedUser1, MockedUser1, MockedUser1, MockedUser1] }),
}));

describe('RightSideBar component', () => {
	beforeEach(() => {
		jest.spyOn(global.Math, 'random').mockReturnValue(1);
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('should renders', () => {
		const wrapper = renderer.create(<RightSideBar />).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
});
