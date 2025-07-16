import React from 'react'
import { TaskItem } from './TaskItem'

export const TaskList = ({ tasks, onToggleComplete, onDelete }) => {

  return (
    <div className="tasks">
      {tasks.length === 0 ? (
        <p className="empty-message">No tasks!</p>
      ) : (
        <ul className="taskList">
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleComplete={onToggleComplete}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </div>

  )
}
