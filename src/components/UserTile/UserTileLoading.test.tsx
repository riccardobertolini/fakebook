import * as React from 'react';
import renderer from 'react-test-renderer';
import { UserTileLoading } from './UserTileLoading';

jest.mock('react-router-dom', () => ({
	Routes: jest.fn(),
	Route: jest.fn(),
	Link: jest.fn(),
}));

describe('UserTileLoading component', () => {
	it('should renders', () => {
		const wrapper = renderer.create(<UserTileLoading times={1} />).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
});
