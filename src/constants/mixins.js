import styled from 'styled-components';

// Constants
import { COLORS, FONTS, LAYOUT } from './styles';

export const fixLineHeight = (height) => `
  line-height: ${height + 2}px;
`;

export const TertiaryButton = styled.div`
  button {
    text-align: center;
    padding: 0;
    font-family: ${FONTS.PRIMARY_MEDIUM};
    font-size: 12px;
    text-decoration: none;
    color: ${COLORS.DARKGRAY};
    background: none;
    outline: none;
    border: none;
    height: auto;
    cursor: pointer;
    padding-bottom: 1px;
    border-bottom: 1px solid ${COLORS.DARKGRAY};

    // Hover State
    &:hover {
      color: ${COLORS.PRIMARY_GREEN};
      border-bottom: 1px solid ${COLORS.PRIMARY_GREEN};
    }
  }
`;

export const PrimaryButton = styled.button`
  transition: all 150ms linear;

  // Default button styles
  background: ${COLORS.SECONDARY};
  border: none;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: ${FONTS.PRIMARY_MEDIUM};
  font-size: 12px;
  font-weight: normal;
  height: 40px;
  ${fixLineHeight(40)}
  padding: 0 ${LAYOUT.GUTTER}px;
  text-align: center;
  text-decoration: none;

  // Medium button overrides
  ${(props) => (props.size === 'medium' ? `
    font-size: 16px;
    height: 50px;
    ${fixLineHeight(50)}
  ` : '')}

  // Large button overrides
  ${(props) => (props.size === 'large' ? `
    font-size: 16px;
    height: 57px;
    ${fixLineHeight(57)}
  ` : '')}

  // Large button overrides
  ${(props) => (props.theme === 'dark' ? `
    background: ${COLORS.PRIMARY};
  ` : '')}

  // Hover State
  &:hover {
    box-shadow: 0 2px 0 0 rgba(223, 240, 209, 0.6);
  }
`;

export const placeholders = (props) => `
  ::-webkit-input-placeholder { /* Chrome */
    color: ${props.color || COLORS.TEXT};
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: ${props.color || COLORS.TEXT};
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: ${props.color || COLORS.TEXT};
    opacity: 1;
  }
  :-moz-placeholder { /* Firefox 4 - 18 */
    color: ${props.color || COLORS.TEXT};
    opacity: 1;
  }
`;
