export const searchTasks = (tasks, query) => {
  const normalizedQuery = (query || '').trim().toLowerCase();
  if (!normalizedQuery) return tasks;

  return tasks.filter((task) =>
    (task.text || '').toLowerCase().includes(normalizedQuery)
  );
};



