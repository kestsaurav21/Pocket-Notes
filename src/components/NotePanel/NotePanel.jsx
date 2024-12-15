import React from 'react'
import './NotePanel.css'
const NotePanel = ({ notes  }) => {


  return (
    <div className='note-panel'>
      {notes.map((note) => (
         <div className="note-item" key={note.id}>
          <div className="circle" style={{backgroundColor: note.color}}
          >{note.initials}</div>
          <span>{note.name}</span>
         </div>
      ))}
    </div>
  )
}

export default NotePanel