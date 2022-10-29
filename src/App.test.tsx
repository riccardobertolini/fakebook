import * as React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import { Routes, Route } from 'react-router-dom';
import { MockedUser1 } from './mock/mockedUser';
import { User } from './models/User';

jest.mock('react-router-dom', () => ({
	Routes: jest.fn(),
	Route: jest.fn(),
	Link: jest.fn(),
}));

jest.mock('axios');

describe('App component', () => {
	it('should renders', () => {
		const setStateMock = jest.fn();
		const useStateMock = (useState: User[]) => [useState, setStateMock];
		jest.spyOn(React, 'useState').mockImplementation(() => [[MockedUser1], setStateMock]);
		const wrapper = renderer.create(<App />).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
});
