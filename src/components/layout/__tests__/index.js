/* eslint-env node, jest */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Adapter from 'enzyme-adapter-react-16';

import Layout from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('>>> Layout Standard Render Component ~~ Snapshot ~~', () => {
  it('+++capturing Snapshot with', () => {
    const renderedValue = shallow(<Layout><div>Test</div></Layout>);
    expect(toJson(renderedValue)).toMatchSnapshot();
  });
});