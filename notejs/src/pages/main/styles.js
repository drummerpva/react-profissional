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
  margin: 0 auto;
  padding: 70px 20px;
  max-width: 600px;
`;

export const NewNote = styled.div`
  background: #fff;
  padding: 10px 20px;
  border-radius: 2px;
  ${boxShadow(1)}
`;

export const NewNoteInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;

export const NoteList = styled.div`
  margin: 40px 0;
`;
