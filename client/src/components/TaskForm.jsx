import React, { useState, useRef, useId } from 'react';
import { ALL_TAGS } from '../utils/constants';

export const TaskForm = ({ onAddTask }) => {
  const [input, setInput] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [taskDetails, setTaskDetails] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [priority, setPriority] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const taskNameId = useId();
  const tagInputId = useId();
  const taskDetailsId = useId();
  const priorityId = useId();
  const startDateId = useId();
  const endDateId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length === 0) return;
    if (selectedTags.length === 0) return;
    if (!priority) return;

    const task = {
      text: input,
      tags: selectedTags,
      priority: priority,
      details: taskDetails,
      startDate,
      endDate,
    };

    onAddTask(task);
    setInput('');
    setTaskDetails('');
    setSelectedTags([]);
    setTagInput('');
    setPriority('');
    setStartDate('');
    setEndDate('');
  };

  const filteredTagOptions = ALL_TAGS.filter(
    tag =>
      tag.toLowerCase().includes(tagInput.toLowerCase()) &&
      !selectedTags.includes(tag)
  );

  const handleAddTag = (tag) => {
    setSelectedTags([...selectedTags, tag]);
    setTagInput('');
  };

  const handleRemoveTag = (tag) => {
    setSelectedTags(selectedTags.filter(t => t !== tag));
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="taskForm" autoComplete="off">
        <label htmlFor={taskNameId} className="sr-only">Task name</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          id={taskNameId}
          placeholder="Task name..."
        />

        <div className="tag-select-container">
          <div className="selected-tags">
            {selectedTags.map(tag => (
              <span key={tag} className="selected-tag">
                {tag}
                <button 
                  type="button" 
                  onClick={() => handleRemoveTag(tag)}
                  aria-label={`Remove tag ${tag}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>

          <label htmlFor={tagInputId} className="sr-only">Add task category</label>
          <input
            type="text"
            id={tagInputId}
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Add task category..."
            className="tag-input"
          />

          {isFocused && tagInput && (
            <ul className="tag-suggestions" role="listbox">
              {filteredTagOptions.length > 0 ? (
                filteredTagOptions.map(tag => (
                  <li 
                    key={tag} 
                    onMouseDown={() => handleAddTag(tag)}
                    role="option"
                    aria-selected="false"
                  >
                    {tag}
                  </li>
                ))
              ) : (
                <li className="no-match" role="status">No matching tags</li>
              )}
            </ul>
          )}
        </div>

        <div className="task-details-container">
          <label htmlFor={taskDetailsId} className="form-label">Task details</label>
          <textarea
            value={taskDetails}
            onChange={(e) => setTaskDetails(e.target.value)}
            id={taskDetailsId}
            placeholder="Task details..."
          />
        </div>

        <div className="priority-slider-group">
          <label id={priorityId} className="form-label">Priority</label>
          <div className="priority-slider" aria-labelledby={priorityId} role="group">
            <span
              className={`priority-option low ${priority === 'Low' ? 'active' : ''}`}
              onClick={() => setPriority('Low')}
              role="button"
              tabIndex="0"
              aria-pressed={priority === 'Low'}
              onKeyDown={(e) => e.key === 'Enter' && setPriority('Low')}
            >
              Low
            </span>
            <span
              className={`priority-option medium ${priority === 'Medium' ? 'active' : ''}`}
              onClick={() => setPriority('Medium')}
              role="button"
              tabIndex="0"
              aria-pressed={priority === 'Medium'}
              onKeyDown={(e) => e.key === 'Enter' && setPriority('Medium')}
            >
              Medium
            </span>
            <span
              className={`priority-option high ${priority === 'High' ? 'active' : ''}`}
              onClick={() => setPriority('High')}
              role="button"
              tabIndex="0"
              aria-pressed={priority === 'High'}
              onKeyDown={(e) => e.key === 'Enter' && setPriority('High')}
            >
              High
            </span>
          </div>
        </div>

        <div className="date-row-container">
          <div className="date-row">
            <label htmlFor={startDateId} className='form-label'>Start</label>
            <input
              type="date"
              id={startDateId}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className="date-row">
            <label htmlFor={endDateId} className='form-label '>Deadline</label>
            <input
              type="date"
              id={endDateId}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          id="addBtn"
          disabled={input.trim().length === 0 || selectedTags.length === 0 || !priority}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="size-6" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Add new task
        </button>
      </form>
    </div>
  );
};
