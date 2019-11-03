import React, { useState, useEffect, Fragment } from 'react';
import uuid from 'uuid/v1';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

import { Container } from './styles.js';
import NoteService from '../../services/NoteService';
import Header from '../../components/Header';
import NavigationDrawer from '../../components/NavigationDrawer';
import Notes from '../Notes';
import About from '../about';

export default function App({ className }) {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [reloadHasError, setreloadHasError] = useState(false);
  const [saveHasError, setSaveHasError] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    handleReload();
  }, []);

  const handleAddNote = text => {
    const newNotes = [...notes, { id: uuid(), text }];
    setNotes(newNotes);
    handleSaveAll(newNotes);
  };

  const handleMove = (direction, index) => {
    const newNotes = notes.slice();
    const removedNote = newNotes.splice(index, 1)[0];

    if (direction === 'up') {
      newNotes.splice(index - 1, 0, removedNote);
    } else {
      newNotes.splice(index + 1, 0, removedNote);
    }

    setNotes(newNotes);
    handleSaveAll(newNotes);
  };

  const handleDelete = id => {
    const newNotes = notes.slice();
    const index = newNotes.findIndex(note => note.id === id);
    newNotes.splice(index, 1);

    setNotes(newNotes);
    handleSaveAll(newNotes);
  };
  const handleSave = (id, text) => {
    let newNotes = notes.slice();
    const index = newNotes.findIndex(note => note.id === id);
    newNotes[index].text = text;

    setNotes(newNotes);
    handleSaveAll(newNotes);
  };
  const handleReload = () => {
    setreloadHasError(false);
    setLoading(true);
    NoteService.load()
      .then(data => {
        setNotes(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setreloadHasError(true);
      });
  };
  const handleSaveAll = (nNotes = []) => {
    setSaveHasError(false);
    setLoading(true);
    const newNotes = nNotes ? nNotes : notes;
    NoteService.save(newNotes)
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setSaveHasError(true);
        setLoading(false);
      });
  };

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router history={history}>
      <div>
        <Header
          isLoading={loading}
          saveHasError={saveHasError}
          retrySave={() => handleSaveAll(notes)}
          onOpenMenu={handleOpenMenu}
        />
        <Container>
          <Switch>
            <Route
              path="/"
              exact
              render={props => <Notes onRetry={handleReload} />}
            />
            <Route path="/about" component={About} />
          </Switch>
        </Container>
        <NavigationDrawer isOpen={isMenuOpen} onCloseMenu={handleOpenMenu} />
      </div>
    </Router>
  );
}
