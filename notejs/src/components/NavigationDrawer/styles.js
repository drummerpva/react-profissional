import styled, { css } from 'styled-components';

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

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: -280;
  height: 100vh;
  width: 260px;
  background: #fff;
  transition: left 0.8s ease-in-out;
  ${boxShadow(5)};
  ${props => (props.isOpen ? 'left:0;' : 'left: -280;')}
`;

export const Header = styled.div`
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12px;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const Menu = styled.div`
  margin-top: 16px;
`;

export const MenuButton = styled.button`
  display: block;
  width: 100%;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  cursor: pointer;
  padding: 6px 8px;
  outline: 0;

  & > i {
    margin-right: 8px;
  }

  &:hover {
    transition: background 0.3s;
    background: rgba(0, 0, 0, 0.08);
    transition: box-shadow 0.4s;
    ${boxShadow(2)};
  }
`;
