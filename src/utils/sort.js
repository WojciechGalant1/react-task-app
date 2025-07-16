export const sortTasks = (tasks, sortMethod) => {
  const sorted = [...tasks];

  switch (sortMethod) {
    case 'az':
      return sorted.sort((a, b) => a.text.localeCompare(b.text));
    case 'za':
      return sorted.sort((a, b) => b.text.localeCompare(a.text));
    case 'oldest':
      return sorted.sort((a, b) => a.id - b.id);
    case 'newest':
    default:
      return sorted.sort((a, b) => b.id - a.id);
  }
};
