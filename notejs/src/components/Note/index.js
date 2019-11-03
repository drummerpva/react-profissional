import React, { useState } from 'react';

import { Container, NoteText, NoteButton, Input } from './styles';

export default function Note({
  note,
  className,
  index,
  handleDelete,
  handleMove,
  handleSave,
  total,
}) {
  const [editing, setEditing] = useState(false);
  const [editNote, setEditNote] = useState('');

  const handleEdit = () => {
    setEditing(!editing);
  };
  const handleCancel = () => {
    setEditing(false);
  };
  const save = () => {
    handleSave(note.id, editNote.value);
    setEditing(false);
  };

  return (
    <Container key={index}>
      {editing ? (
        <Input type="text" defaultValue={note.text} ref={c => setEditNote(c)} />
      ) : (
        <NoteText>{note.text}</NoteText>
      )}
      {editing && (
        <React.Fragment>
          <NoteButton
            style={{ color: '#f44336' }}
            onClick={handleCancel}
            edit={editing}
          >
            <i className={`material-icons ${className}`}>cancel</i>
          </NoteButton>
          <NoteButton
            style={{ color: '#4caf50' }}
            onClick={save}
            edit={editing}
          >
            <i className={`material-icons ${className}`}>done_outline</i>
          </NoteButton>
        </React.Fragment>
      )}

      <NoteButton onClick={handleEdit} disabled={editing}>
        <i className={`material-icons ${className}`}>edit</i>
      </NoteButton>
      <NoteButton onClick={() => handleDelete(note.id)} disabled={editing}>
        <i className={`material-icons ${className}`}>delete</i>
      </NoteButton>

      <NoteButton index={index} onClick={() => handleMove('up', index)}>
        <i className={`material-icons ${className}`}>arrow_upward</i>
      </NoteButton>

      <NoteButton
        index={index === total - 1 ? 0 : null}
        onClick={() => handleMove('down', index)}
      >
        <i className={`material-icons ${className}`}>arrow_downward</i>
      </NoteButton>
    </Container>
  );
}
