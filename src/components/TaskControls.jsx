import React from 'react';

export const TaskControls = ({
  currentFilter,
  setFilter,
  currentSort,
  setSort,
  searchQuery,
  setSearchQuery,
  searchMethod,
  setSearchMethod,
  onOpenAdvanced
}) => {
  return (
    <div className="task-controls">
      
      <div className="btn-group">
        <select
          className="sort-select"
          value={searchMethod}
          onChange={(e) => setSearchMethod(e.target.value)}
        >
          <option value="name">By name</option>
          <option value="tag">By tag</option>
        </select>
        
        <input
          type="text"
          className="search-input"
          placeholder={searchMethod === 'tag' ? "Search by tag..." : "Search by name..."}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className='filter-row'>
        <div className="btn-group">
          <button
            className={`button ${currentFilter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`button ${currentFilter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
          <button
            className={`button ${currentFilter === 'unfinished' ? 'active' : ''}`}
            onClick={() => setFilter('unfinished')}
          >
            Unfinished
          </button>
        </div>

        <div className="btn-group">
          <select
            className="sort-select"
            value={currentSort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="az">A → Z</option>
            <option value="za">Z → A</option>
            <option value="newest">New</option>
            <option value="oldest">Old</option>
          </select>

          <button className="button advanced-button" onClick={onOpenAdvanced}>
            ⚙️ More
          </button>
        </div>

      </div>

    </div>
  );
};
