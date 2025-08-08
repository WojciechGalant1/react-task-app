import React from 'react';

export const TaskAdvancedControls = ({
  searchQuery,
  setSearchQuery,
  currentGroup,
  setGroup,
  onClose
}) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Advanced Options</h2>

        <label>Search by name:</label>
        <input
          type="text"
          className="search-input"
          placeholder="e.g. groceries"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <label>Group tasks by:</label>
        <select
          className="sort-select"
          value={currentGroup}
          onChange={(e) => setGroup(e.target.value)}
        >
          <option value="none">No grouping</option>
          <option value="priority">Priority</option>
          <option value="tags">Tags</option>
        </select>

        <button className="button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
