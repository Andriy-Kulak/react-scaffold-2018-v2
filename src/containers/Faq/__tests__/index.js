/* eslint-env node, jest */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Adapter from 'enzyme-adapter-react-16';

import Faq from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('>>> Faq Standard Render Container ~~ Snapshot ~~', () => {
  it('+++capturing Snapshot with', () => {
    const renderedValue = shallow(<Faq />);
    expect(toJson(renderedValue)).toMatchSnapshot();
  });
});
