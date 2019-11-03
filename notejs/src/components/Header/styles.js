import styled, { keyframes, css } from 'styled-components';
const boxShadow = level => {
  let shadow;
  switch (level) {
    case 1:
      shadow = `box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);`;
      break;
    case 2:
      shadow = `box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`;
      break;
    case 3:
      shadow = `box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)`;
      break;
    case 4:
      shadow = `box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)`;
      break;
    case 5:
      shadow = `box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)`;
      break;
  }
  return shadow;
};
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
export const Container = styled.div`
  height: 46px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #03a9f4;
  padding: 0 20px;
  color: #fff;
  ${boxShadow(2)}
`;
export const ActionButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  ${props =>
    props.isLoading &&
    css`
      animation: ${rotate} 1.2s infinite linear;
    `}
  ${props =>
    props.danger &&
    css`
      color: #f44336;
    `}

  &:focus {
    outline: none;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }
`;

export const Brand = styled.span`
  flex: 1;
  padding-left: 8px;
`;
