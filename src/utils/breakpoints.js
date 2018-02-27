import { css } from 'styled-components';

// Constants
import { BREAKPOINTS } from '../constants/breakpoints';

/**
 * @param   {string|object} arg
 * @param   {object}        [breakpoints]
 * @returns {*}
 */
const breakpoint = (arg) => {
  const breakpointObj = BREAKPOINTS[arg] || arg;

  return (...args) => css`@media (${breakpointObj.type}-width: ${breakpointObj.value}px) {
    ${css.call(this, ...args)}
  }`;
};

export default breakpoint;
