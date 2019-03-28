import styled from 'styled-components';

export const Wrapper = styled.div`
  &:hover {
    cursor: pointer;
  }

  .faq {
    border-bottom: 2px solid ${props => props.theme.color.black.lighter};
  }

  .faq-title {
    border: none;
    background: none;
    padding: 0;
    outline: none;
    width: 100%;
    text-align: left;
    cursor: pointer;

    font-family: ${props => props.theme.font.secondary};
    ${props => props.theme.font_size.regular};
    font-weight: bold;
    padding: 24px;
    padding-right: 72px;
    padding-left: 16px;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      border-left: 2px solid ${props => props.theme.color.black.regular};
      border-bottom: 2px solid ${props => props.theme.color.black.regular};
      position: absolute;
      top: 34px;
      right: 36px;
      transform: rotate(-45deg);
      transition: transform 0.3s ease-in-out;
    }

    &.active {
      &::after {
        transform: rotate(135deg);
      }
    }
  }

  .faq-content {
    padding: 0 72px 32px 16px;
    line-height: 26px;
    ${props => props.theme.font_size.small};
    color: ${props => props.theme.color.black.light};
  }
`;
