/* eslint-env node, jest */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Adapter from 'enzyme-adapter-react-16';

import Nav from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('>>> Nav Standard Render Component ~~ Snapshot ~~', () => {
  it('+++capturing Snapshot with', () => {
    const renderedValue = shallow(<Nav />);
    expect(toJson(renderedValue)).toMatchSnapshot();
  });
});