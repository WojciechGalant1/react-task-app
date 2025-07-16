import React from 'react'

export const TaskControls = ({ currentFilter, setFilter, currentSort, setSort }) => {
    return (
        <div className="btn-row">
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
        </div>
    )
}
