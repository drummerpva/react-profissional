import styled from 'styled-components';

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
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background: #fff;
  padding: 10px 20px;
  border-radius: 2px;
  ${boxShadow(1)}
`;
export const NoteText = styled.span`
  flex: 1;
`;

export const NoteButton = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  ${props => props.index === 0 && `visibility:hidden;`}
`;

export const Input = styled.input`
  flex: 1;

  background: transparent;
  border: 0;
  border-bottom: 1px solid #c7c7c7;
  outline: 0;
`;
