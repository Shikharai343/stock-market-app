import React from 'react';
import { shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import HomeScreen from '../../src/screens/HomeScreen';

let navigation = {
    navigate: jest.fn()
};
let wrapper: any;

describe('HomeScreen testing', () => {
    it('should create a snapshot of the HomeScreen component', () => {
        wrapper = shallow(<HomeScreen  navigation={navigation}/>);
        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
