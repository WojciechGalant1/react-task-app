import React, { useState, useRef, useEffect  } from 'react';

const allTags = ['Work', 'Personal', 'Urgent', 'Shopping', 'Health', 'Coding', 'Study', 'Fun', 'Home', 'Finance', 'Fitness', 'Appointments', 'Chores', 'Projects', 'Reading',
  'Learning', 'Travel', 'Ideas', 'Meeting', 'Errands', 'Social', 'Birthday', 'Cleaning', 'Goals', 'Planning'];

export const TaskForm = ({ onAddTask }) => {
  const [input, setInput] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const tagRef = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length === 0) return;

    const task = {
      text: input,
      tags: selectedTags
    };

    onAddTask(task);
    setInput('');
    setSelectedTags([]);
    setTagInput('');
    setShowSuggestions(false);
  };

  const filteredTagOptions = allTags.filter(
    tag =>
      tag.toLowerCase().includes(tagInput.toLowerCase()) &&
      !selectedTags.includes(tag)
  );

  const handleAddTag = (tag) => {
    setSelectedTags([...selectedTags, tag]);
    setTagInput('');
    setShowSuggestions(false);
  };

  const handleRemoveTag = (tag) => {
    setSelectedTags(selectedTags.filter(t => t !== tag));
  };

  const handleClickOutside = (e) => {
    if (tagRef.current && !tagRef.current.contains(e.target)) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="taskForm" autoComplete="off">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          id="taskInpt"
          placeholder="Task name..."
        />

        <div className="tag-select-container" ref={tagRef}>
          <div className="selected-tags">
            {selectedTags.map(tag => (
              <span key={tag} className="selected-tag">
                {tag}
                <button type="button" onClick={() => handleRemoveTag(tag)}>×</button>
              </span>
            ))}
          </div>
          <input
            type="text"
            value={tagInput}
            onChange={(e) => {
              setTagInput(e.target.value);
              setShowSuggestions(true);
            }}
            placeholder="Add task category..."
            className="tag-input"
          />
         {showSuggestions && tagInput && (
            <ul className="tag-suggestions">
              {filteredTagOptions.length > 0 ? (
                filteredTagOptions.map(tag => (
                  <li key={tag} onClick={() => handleAddTag(tag)}>
                    {tag}
                  </li>
                ))
              ) : (
                <li className="no-match">No matching tags</li>
              )}
            </ul>
          )}
        </div>

        <button
          type="submit"
          id="addBtn"
          disabled={input.trim().length === 0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Add new task
        </button>
      </form>
    </div>
  );
};
