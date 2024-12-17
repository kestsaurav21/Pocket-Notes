import React, { useState } from 'react';
import './CreateGroupModal.css';

const CreateGroupModal = ( { closeModal, createGroup }) => {

    const [groupName, setGroupName] = useState('')
    const [ selectedColor, setSelectedColor ] = useState('')

  const colors = ['#b485ff', '#ff69b4', '#5ad5e3', '#ff9b6a', '#0057ff', '#4a90e2'];


  return (
    <div className="modal">
      <div className="overlay" onClick={closeModal} ></div>
      <div className="modal-content">
        <h2>Create New Group</h2>
        <div className="form-group">
          <label>Group Name</label>
          <input
            type="text"
            placeholder="Enter group name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Choose Colour</label>
          <div className="color-options">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`color-circle ${selectedColor === color ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              ></div>
            ))}
          </div>
        </div>
        <button className="create-button" onClick={() => createGroup(groupName, selectedColor)} >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateGroupModal;
