import React from 'react';

export const TaskAdvancedControls = ({
  currentGroup,
  setGroup,
  priorityFilter,
  setPriorityFilter,
  dateFrom,
  setDateFrom,
  dateTo,
  setDateTo,
  setFilter,
  setSearchQuery,
  onClose
}) => {
  const handleClear = () => {
    setGroup('none');
    setPriorityFilter('any');
    setDateFrom('');
    setDateTo('');
    if (setFilter) setFilter('all');
    if (setSearchQuery) setSearchQuery('');
  };
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Advanced Options</h2>

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

        <div className="option-row">
          <span className="option-label">Priority filter:</span>
          <select
            className="sort-select"
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
          >
            <option value="any">Any</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div className="option-row date-range-row">
          <span className="date-range-label">Date range:</span>
          <div className="date-inputs-container">
            <div className="date-input-group">
              <span className="date-input-label">From</span>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
            </div>
            <span className="date-separator">to</span>
            <div className="date-input-group">
              <span className="date-input-label">To</span>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="modal-buttons">
          <button className="confirm-btn" onClick={handleClear}>Clear filters</button>
          <button className="cancel-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};
