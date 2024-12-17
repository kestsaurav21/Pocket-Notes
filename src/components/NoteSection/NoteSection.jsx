import React, { useEffect, useState, useRef } from "react";
import "./NoteSection.css";
import { formatDate, formatTime } from "../../utils";
import { IoArrowBackOutline } from "react-icons/io5";


const NoteSection = ({ notes, setNotes, id, closeNote }) => {
  const [message, setMessage] = useState("");
  const [currentNote, setCurrentNote] = useState(
    notes.find((note) => note.id === id)
  );
  const noteMessageContainer = useRef(null);

  const handleAddNote = () => {
    if (message) {
      const newMessage = {
        message: message,
        date: formatDate(new Date()),
        time: formatTime(new Date()),
        id: new Date().getTime(),
      };

      const updatedNotes = notes.map((note) => {
        if (note.id === id) {
          note.notePoints.push(newMessage);
        }
        return note;
      });

      setNotes(updatedNotes);
      setMessage("");
      noteMessageContainer.current.scrollTop = noteMessageContainer.current.scrollHeight;
    }
  };

  useEffect(() => {
    setCurrentNote(notes.find((note) => note.id === id));
  }, [id]);


  return (
    <div className="note-section">
      <div className="note-header">
        <div className="backarrow"><IoArrowBackOutline onClick={() => closeNote()} style={{ fontSize: "1.5rem" }} /></div>
        <div className="circle" style={{ backgroundColor: currentNote.color }}>
          {currentNote.initials}
        </div>
        <span>{currentNote.name}</span>
      </div>
      <div className="note-display" ref={noteMessageContainer}>
        {currentNote.notePoints.length > 0 ? (
          <ul className="note-list">
            {currentNote.notePoints.map((note) => {
              return (
                <li key={note.id} className="note-item">
                  <div className="note-content">
                    <p>{note.message}</p>
                    <span className="note-date">
                      {note.date} &#x2022; {note.time}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="no-notes">
            No notes available. Start by adding one below.
          </p>
        )}
      </div>

      <div className="note-input">
        <textarea
          placeholder="Enter your text here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="send-button"
          onClick={handleAddNote}
          disabled={!message}>
          ➤
        </button>
      </div>

    </div>
  );
};

export default NoteSection;
