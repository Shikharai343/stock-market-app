import React from 'react';
import { shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import StockPriceScreen from '../../src/screens/StockPriceScreen';

const mockNavigate = jest.fn().mockImplementation(() => 'okay');
const mockNavigation = {
    navigate: mockNavigate,
    navigation: {
        getParam: mockNavigate,
    },
};
let wrapper: any;

describe('StockPrice Screen testing', () => {
    it('should create a snapshot of the StockPrice Screen', () => {
        wrapper = shallow(<StockPriceScreen  navigation={mockNavigation.navigation}/>);
        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
