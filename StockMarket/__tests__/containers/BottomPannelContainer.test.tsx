import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, ShallowWrapper} from 'enzyme';
import BottomPannelContainer from '../../src/containers/BottomPannelContainer';

let wrapper: ShallowWrapper;

describe('BottomPannelContainer testing', () => {
    wrapper = shallow(<BottomPannelContainer/>);

    it('should render snapshot', () => {
        const tree = renderer.create(<BottomPannelContainer/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
