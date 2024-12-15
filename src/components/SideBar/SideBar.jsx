import React from "react";
import "./SideBar.css";
import NotePanel from "../NotePanel/NotePanel";

const SideBar = ({ createGroup, notes }) => {
  


  return (
      <div className="sidebar">
        <h1 className="title">Pocket Notes</h1>
        <div className="notes-list">
          <NotePanel notes={notes} />
        </div>
        <button onClick={createGroup}
         className="add-btn">+</button>
      </div>

  );
};

export default SideBar;
