/* eslint-env node, jest */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Adapter from 'enzyme-adapter-react-16';

import { Home } from '../index';

Enzyme.configure({ adapter: new Adapter() });

const actions = {
  getAPIData: () => {
  }
};

describe('>>> Home Standard Render Container ~~ Snapshot ~~', () => {
  it('+++capturing Snapshot with', () => {
    const renderedValue = shallow(<Home actions={actions} />);
    expect(toJson(renderedValue)).toMatchSnapshot();
  });
});