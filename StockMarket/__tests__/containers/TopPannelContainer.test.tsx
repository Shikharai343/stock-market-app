import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import TopPannelConatiner from '../../src/containers/TopPannelConatiner';

const createTestProps = (props: Object) => ({
    ...props
});
let wrapper: any;
let props: any;

describe('TopPannelContainer testing', () => {
    props = createTestProps({});
    wrapper = shallow(<TopPannelConatiner {...props}/>);

    it('should render snapshot', () => {
        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
