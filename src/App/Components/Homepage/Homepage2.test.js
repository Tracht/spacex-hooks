import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Homepage from './Homepage';

configure({adapter: new Adapter() });

describe('<Homepage />', ()=> {
  const wrapper = shallow(<Homepage />, );

  it('should display Homepage without crashing', ()=> {
    expect(wrapper.find(<Homepage />));
  });

  // it('should display quote: `Where are the aliens?`', () => {
  //   expect(wrapper.contains('Where are the aliens?'));
  // });

  // it('should display a Button to see the next quote', ()=> {
  //   expect(wrapper.find('button').contains('summon Elon quotes'));
  // });
})


