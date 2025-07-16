export const filterTasks = (tasks, filterType) => {
  switch (filterType) {
    case 'completed':
      return tasks.filter((task) => task.completed);
    case 'unfinished':
      return tasks.filter((task) => !task.completed);
    case 'all':
    default:
      return tasks;
  }
};
