export const searchTasks = (tasks, query, searchMethod = 'name') => {
  const normalizedQuery = (query || '').trim().toLowerCase();
  if (!normalizedQuery) return tasks;

  return tasks.filter((task) => {
    if (searchMethod === 'tag') {
      // Search by tags
      const tags = Array.isArray(task.tags) ? task.tags : [];
      return tags.some(tag => tag.toLowerCase().includes(normalizedQuery));
    } else {
      // Default: search by name
      return (task.text || '').toLowerCase().includes(normalizedQuery);
    }
  });
};



