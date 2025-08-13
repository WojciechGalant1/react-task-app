import React from 'react'
import { TaskItem } from './TaskItem'

export const TaskList = ({ tasks, onToggleComplete, onDelete, groupBy = 'none' }) => {

  const renderTasks = (taskList) => (
    <ul className="taskList">
      {taskList.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );

  const renderGroupedByPriority = () => {
    const groups = {
      High: [],
      Medium: [],
      Low: [],
      None: [],
    };
    for (const task of tasks) {
      const priority = task.priority || '';
      if (priority === 'High') groups.High.push(task);
      else if (priority === 'Medium') groups.Medium.push(task);
      else if (priority === 'Low') groups.Low.push(task);
      else groups.None.push(task);
    }

    const order = ['High', 'Medium', 'Low', 'None'];
    return order
      .filter((g) => groups[g].length > 0)
      .map((g) => (
        <section className="group-section" key={g}>
          <h3 className="group-title">Priority: {g}</h3>
          {renderTasks(groups[g])}
        </section>
      ));
  };

  const renderGroupedByTags = () => {
    const tagMap = new Map();
    const noTags = [];
    for (const task of tasks) {
      const tags = Array.isArray(task.tags) ? task.tags : [];
      if (tags.length === 0) {
        noTags.push(task);
      } else {
        for (const tag of tags) {
          if (!tagMap.has(tag)) tagMap.set(tag, []);
          tagMap.get(tag).push(task);
        }
      }
    }

    const sortedTags = Array.from(tagMap.keys()).sort((a, b) => a.localeCompare(b));
    const sections = sortedTags.map((tag) => (
      <section className="group-section" key={tag}>
        <h3 className="group-title">Tag: {tag}</h3>
        {renderTasks(tagMap.get(tag))}
      </section>
    ));
    if (noTags.length > 0) {
      sections.push(
        <section className="group-section" key="__no_tags__">
          <h3 className="group-title">No tags</h3>
          {renderTasks(noTags)}
        </section>
      );
    }
    return sections;
  };

  return (
    <div className="tasks">
      {tasks.length === 0 ? (
        <p className="empty-message">No tasks!</p>
      ) : groupBy === 'priority' ? (
        renderGroupedByPriority()
      ) : groupBy === 'tags' ? (
        renderGroupedByTags()
      ) : (
        renderTasks(tasks)
      )}
    </div>

  )
}
