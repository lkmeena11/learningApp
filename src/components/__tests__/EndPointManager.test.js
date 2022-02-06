import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow } from 'enzyme';
import EndPointManager from '../EndPointManager';


Enzyme.configure({ adapter: new Adapter() });

describe('EndPointManager', () => {
	it('test endpoint manager', () => {
		const component = shallow(<EndPointManager />);
		const instance = component.instance();
		const spy = jest.spyOn(instance, 'storeAction');
		expect(component.state().actionsList.length).toEqual(0);
		const fakeAction = { action: 'test', deviceNames: 'a,b', time: 'today'};
		instance.storeAction(fakeAction);

		component.update();//if you are setting state
		expect(component.state().actionsList.length).toEqual(1);
		expect(component.state().actionsList[0].action).toEqual('test');
	});
    
});