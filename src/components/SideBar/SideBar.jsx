import React from 'react'
import './SideBar.css'
import NotesPanel from '../NotePanel/NotesPanel'
const SideBar = ({ openModal, notes, openNote, setShowNote }) => {
  return (
    <div className="sidebar">
        <h1 className="title" onClick={() => setShowNote(false)}>Pocket Notes</h1>
        <div className="notes-list">
         <NotesPanel notes={notes} openNote={openNote} />
        </div>
        <button onClick={openModal}
         className="add-btn">+</button>
    </div>
  )
}

export default SideBar