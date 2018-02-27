import styled from 'styled-components';

// Constants
import { COLORS, LAYOUT, ORDER } from '../../constants/styles';

// Utils
import breakpoint from '../../utils/breakpoints';

export const StyledHeader = styled.nav`
  align-items: center;
  background: ${COLORS.HEADER};
  border-bottom: 1px solid ${COLORS.GRAY};
  display: flex;
  height: ${LAYOUT.HEADERHEIGHT}px;
  justify-content: flex-end;
  left: 0;
  padding: 0 ${LAYOUT.GUTTER}px;
  position: fixed;
  top: 0;
  width: 100%;
  padding-bottom: 0px;
  z-index: ${ORDER.HEADER};

  ${breakpoint('tabletMax')`
    height: ${LAYOUT.MOBILE_HEADERHEIGHT}px;
    justify-content: space-between;
    padding: 0;
  `}
`;

export const StyledLogo = styled.div`
  position: absolute;
  left: ${LAYOUT.GUTTER}px;
  top: calc(50% - 42px);
  height: 36px;

  img {
    animation: app-logo-spin infinite 20s linear;
    @keyframes app-logo-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    height: 80px;
  }

  ${breakpoint('tabletMax')`
    left: 47%;
    top: calc(50% - 17px);
    /* margin-left: ${LAYOUT.MOBILE_HEADERHEIGHT * -1}px;
    width: ${LAYOUT.MOBILE_HEADERHEIGHT * 2}px; */

    img {
      height: 30px;
    }
  `}
`;

export const StyledLink = styled.div`
  a, button {
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    font-size: 16px;
    font-weight: 500;
    height: ${LAYOUT.HEADERHEIGHT}px;
    justify-content: center;
    padding: 0 ${LAYOUT.GUTTER}px;

    img {
      padding-left: 10px;
      position: relative;
      top: -2px;
    }
  }

  ${breakpoint({ value: 880, type: 'max' })`
    a, button {
      font-size: 12px;
      padding: 0 ${LAYOUT.GUTTER / 2}px;
      img {
        height: 15px;
        padding-right: 5px;
        top: -1px;
      }
    }
  `}
  ${breakpoint('tabletMax')`
    a, button {
      height: ${LAYOUT.MOBILE_HEADERHEIGHT}px;
      padding: 0 ${LAYOUT.GUTTER}px;
    }
  `}
`;