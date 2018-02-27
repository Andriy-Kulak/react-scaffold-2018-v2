import styled from 'styled-components';

// Constants
import { LAYOUT } from '../../constants/styles';

// Utils
import breakpoint from '../../utils/breakpoints';


export const StyledContent = styled.div`
  > div {
    margin: 0 auto 0;
    padding-top: ${LAYOUT.MOBILE_HEADERHEIGHT}px;

    ${breakpoint('tabletMin')`
      padding-top: ${LAYOUT.HEADERHEIGHT}px;
    `}
  }
`;

