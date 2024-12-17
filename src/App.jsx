import React, { useState, useEffect } from 'react';
import './App.css';
import { getInitials } from './utils';
import Home from './pages/Home/Home';
import CreateGroupModal from './components/CreateGroup/CreateGroupModal';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [notes, setNotes] = useState(localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : []);
  const [noteId, setNoteId] = useState(null);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const createGroup = (noteName, noteColor) => {
    if (!noteName && !noteColor) {
      alert('Please provide a valid group name and color.');
      return;
    }

    const id = `${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
    setNoteId(id);

    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: id,
        name: noteName,
        color: noteColor,
        initials: getInitials(noteName),
        notePoints: [],
      },
    ]);

    closeModal();
  };

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [createGroup]);

  const openNote = ( id ) => {
      setNoteId(id);
  }

  const closeNote = () => {
    setNoteId(null);
  }

  return (
    <div>
      {showModal && <CreateGroupModal closeModal={closeModal} createGroup={createGroup} />}
      <Home openModal={openModal} notes={notes} openNote={openNote} id={noteId} setNotes={setNotes}  closeNote={closeNote} />
    </div>
  );
};

export default App;
