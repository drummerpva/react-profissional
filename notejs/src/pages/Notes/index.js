import React, { Fragment } from 'react';

import { NewNote, NewNoteInput, NoteList } from './styles';
import Note from '../../components/Note';
import Error from '../../components/Error';

export default function Notes({ reloadHasError, onRetry }) {
  return <h1>Notes</h1>;
  /* if (reloadHasError) {
    return <Error onRetry={handleReload} />;
  }
  return (
    <Fragment>
      <NewNote>
        <NewNoteInput
          type="text"
          placeholder="Digite sua nota aqui..."
          value={newNote}
          onChange={change => setNewNote(change.target.value)}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              handleAddNote(event.target.value);
              setNewNote('');
            }
          }}
        />
      </NewNote>
      <NoteList>
        {notes.map((note, index) => (
          <Note
            key={uuid()}
            note={note}
            handleDelete={handleDelete}
            handleMove={handleMove}
            handleSave={handleSave}
            index={index}
            total={notes.length}
          />
        ))}
      </NoteList>
    </Fragment>
  ); */
}
