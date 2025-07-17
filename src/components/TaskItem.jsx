import React from 'react'

export const TaskItem = ({ task, onToggleComplete, onDelete }) => {

  const formattedDate = new Date(task.id).toLocaleString('pl-PL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).replace(',', ' •');

  return (
    <li className="task">
      <input type="checkbox" id={`task-${task.id}`} checked={task.completed} onChange={() => onToggleComplete(task.id)} style={{ display: 'none' }} />
      <label htmlFor={`task-${task.id}`} className="checkboxCustom">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24"
          strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </label>
      <label htmlFor={`task-${task.id}`} className="task-text">
        {task.text} <span className="task-date">({formattedDate})</span>
        {task.tags?.length > 0 && (
          <div className="task-tags">
            {task.tags.map((tag, i) => (
              <span key={i} className="task-tag">{tag}</span>
            ))}
          </div>
        )}
      </label>
      <button
        className="delete-button"
        onClick={() => onDelete(task.id)}
        title="Delete task"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="15" height="15"
          strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </li>
  )
}
