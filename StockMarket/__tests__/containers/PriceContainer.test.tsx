import React from 'react';
import { shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import PriceContainer from '../../src/containers/PriceContainer';
import {Button, TextInput} from 'react-native';

const mockNavigate = jest.fn().mockImplementation(() => 'okay');
const mockNavigation = {
    navigate: mockNavigate,
    navigation: {
        getParam: mockNavigate,
    },
};
let wrapper: any;

describe('Snapshot testing', () => {
    wrapper = shallow(<PriceContainer  navigation={mockNavigation.navigation}/>);

    it('should create a snapshot of the StockPrice Screen', () => {
        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should call with param', () => {
        expect(mockNavigation.navigation.getParam).toHaveBeenCalledWith('itemPrice');
        expect(mockNavigation.navigation.getParam).toHaveBeenCalledWith('deleteData');
    });

    it('should return button length', () => {
       expect( wrapper.find(Button)).toHaveLength(2);
    })

    it('should change state when price entered', () => {
        wrapper.find(TextInput).first().prop('onChangeText')('123');
        expect(wrapper.state('text')).toBe('123');
    })
});
