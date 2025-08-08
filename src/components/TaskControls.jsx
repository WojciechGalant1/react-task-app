import React from 'react';

export const TaskControls = ({
  currentFilter,
  setFilter, currentSort,
  setSort,
  searchQuery,
  setSearchQuery,
  onOpenAdvanced
}) => {
  return (
    <div className="task-controls">
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

        <input
          type="text"
          className="search-input"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
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
          ⚙️ Advanced
        </button>
      </div>
    </div>
  );
};




// import React from 'react';

// export const TaskControls = ({
//   currentFilter,
//   setFilter,
//   currentSort,
//   setSort,
//   currentGroup,
//   setGroup,
//   searchQuery,
//   setSearchQuery
// }) => {
//   return (
//     <div className="task-controls">
//       <div className="btn-row top-row">
//         <div className="btn-group">
//           <button
//             className={`button ${currentFilter === 'all' ? 'active' : ''}`}
//             onClick={() => setFilter('all')}
//           >
//             All
//           </button>
//           <button
//             className={`button ${currentFilter === 'completed' ? 'active' : ''}`}
//             onClick={() => setFilter('completed')}
//           >
//             Completed
//           </button>
//           <button
//             className={`button ${currentFilter === 'unfinished' ? 'active' : ''}`}
//             onClick={() => setFilter('unfinished')}
//           >
//             Unfinished
//           </button>
//         </div>

//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search by name..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       <div className="btn-row bottom-row">
//         <select
//           className="sort-select"
//           value={currentSort}
//           onChange={(e) => setSort(e.target.value)}
//         >
//           <option value="az">A → Z</option>
//           <option value="za">Z → A</option>
//           <option value="newest">New</option>
//           <option value="oldest">Old</option>
//         </select>

//         <select
//           className="sort-select"
//           value={currentGroup}
//           onChange={(e) => setGroup(e.target.value)}
//         >
//           <option value="none">No grouping</option>
//           <option value="priority">Group by Priority</option>
//           <option value="tags">Group by Tag</option>
//         </select>
//       </div>
//     </div>
//   );
// };
