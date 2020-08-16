import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ItemCard from './ItemCard';

describe("<ItemCard />", () => {
    it("renders properly", () => {
      const component = shallow(<ItemCard />);
      expect(component.equals(<ItemCard  />)).to.equal(true);
    });
  });