import React from 'react';
import { shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import SplashScreen from '../../src/screens/SplashScreen';
import {RouteNames} from '../../src/navigation/routes';

jest.useFakeTimers();
let navigation = {
    navigate: jest.fn()
};
let wrapper: any;

describe('Splash Screen testing', () => {
    it('should create a snapshot of the Splash Screen', () => {
        wrapper = shallow(<SplashScreen  navigation={navigation}/>);
        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should navigate to app', () => {
        jest.runAllTimers();
        expect(navigation.navigate).toHaveBeenCalledWith(RouteNames.app);
    })
});
