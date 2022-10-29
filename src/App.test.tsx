import * as React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import { Routes, Route } from 'react-router-dom';
import { MockedUser1 } from './mock/mockedUser';
import { generateRandomBirthday, RightSideBar } from './components/RightSideBar/RightSideBar';

jest.mock('react-router-dom', () => ({
	Routes: jest.fn(),
	Route: jest.fn(),
	Link: jest.fn(),
}));

jest.mock('./components/RightSideBar/RightSideBar', () => ({
	RightSideBar: () => <div></div>,
	generateRandomBirthday: () => 'Hello',
}));

jest.mock('axios');

describe('App component', () => {
	afterAll(() => {
		jest.clearAllMocks();
	});

	it('should renders', () => {
		const setStateMock = jest.fn();
		<RightSideBar />;
		jest.spyOn(React, 'useState').mockImplementation(() => [[MockedUser1, MockedUser1, MockedUser1], setStateMock]);
		const wrapper = renderer.create(<App />).toJSON();

		expect(wrapper).toMatchSnapshot();
	});
});
