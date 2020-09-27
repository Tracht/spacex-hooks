import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ItemModalData from './ItemModalData';

configure({adapter: new Adapter() });

describe('<ItemModalData />', ()=> {
  const wrapper = shallow(<ItemModalData />, );

  it('should display Inventory page without crashing', ()=> {
    expect(wrapper.find(<ItemModalData />));
  });

})