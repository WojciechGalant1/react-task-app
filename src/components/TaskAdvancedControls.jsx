import React from 'react';

export const TaskAdvancedControls = ({
  searchQuery,
  setSearchQuery,
  currentGroup,
  setGroup,
  onClose
}) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Advanced Options</h2>

        <div className="option-row">
          <span className="option-label">Search by name:</span>
          <input
            type="text"
            className="search-input"
            placeholder="e.g. groceries"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="option-row">
          <span className="option-label">Group tasks by:</span>
          <select
            className="sort-select"
            value={currentGroup}
            onChange={(e) => setGroup(e.target.value)}
          >
            <option value="none">No grouping</option>
            <option value="priority">Priority</option>
            <option value="tags">Tags</option>
          </select>
        </div>

        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};
