import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Inventory from './Inventory';

configure({adapter: new Adapter() });

describe('<Inventory />', ()=> {
  const wrapper = shallow(<Inventory />, );

  it('should display Inventory page without crashing', ()=> {
    expect(wrapper.find(<Inventory />));
  });

})


