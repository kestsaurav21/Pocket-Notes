import React from 'react'
import './NotesPanel.css'
const NotesPanel = ({ notes, openNote }) => {
  return (
    <div className='note-panel'>
      {notes.map((note) => (
         <div className="item" key={note.id} onClick={() => openNote(note.id)}  >
          <div className="circle" style={{backgroundColor: note.color}}
          >{note.initials}</div>
          <span>{note.name}</span>
         </div>
      ))}
    </div>
  )
}

export default NotesPanel