import { useState, useEffect } from 'react';
import { filterTasks } from '../utils/filter';
import { sortTasks } from '../utils/sort';

export const useTasks = () => {

  const [filter, setFilter] = useState('all');     // 'all' | 'completed' | 'unfinished'
  const [sort, setSort] = useState('newest');      // 'newest' | 'oldest' | 'az' | 'za'

  const [tasks, setTasks] = useState(() => {
    try {
      const stored = localStorage.getItem('tasks');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error('Failed to parse tasks from localStorage:', e);
      return [];
    }
  });

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

const addTask = ({ text, tags = [] }) => {
  const trimmed = text.trim();
  if (trimmed.length === 0) return;

  const newTask = {
    id: Date.now(),
    text: trimmed,
    completed: false,
    tags,
  };
  setTasks((prev) => [newTask, ...prev]);
};


  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const visibleTasks = sortTasks(
    filterTasks(tasks, filter),
    sort
  );

  const clearAllTasks = () => {
    localStorage.removeItem('tasks');
    setTasks([]);
  };


  return {
    tasks: visibleTasks,
    addTask,
    deleteTask,
    toggleComplete,
    filter,
    setFilter,
    sort,
    setSort,
    clearAllTasks,
  };
};

//const [tasks, setTasks] = useState([]);
// Load from localStorage on mount
// useEffect(() => {
//   try {
//     const stored = localStorage.getItem('tasks');
//     if (stored) setTasks(JSON.parse(stored));
//   } catch (e) {
//     console.error('Failed to parse tasks from localStorage:', e);
//   }
// }, []);


// import { useState, useEffect } from 'react';

// export const useTasks = () => {
//   const [tasks, setTasks] = useState([]);
//   const [filter, setFilter] = useState('all');
//   const [sort, setSort] = useState('newest');

//   // Load tasks from localStorage once
//   useEffect(() => {
//     const saved = localStorage.getItem('tasks');
//     if (saved) {
//       try {
//         setTasks(JSON.parse(saved));
//       } catch (e) {
//         console.error('Failed to parse tasks:', e);
//       }
//     }
//   }, []);

//   // Save tasks whenever they change
//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = (text) => {
//     const newTask = {
//       id: Date.now(),
//       text: text.trim(),
//       completed: false,
//     };
//     setTasks((prev) => [newTask, ...prev]);
//   };

//   const deleteTask = (id) => {
//     setTasks((prev) => prev.filter((task) => task.id !== id));
//   };

//   const toggleComplete = (id) => {
//     setTasks((prev) =>
//       prev.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const filteredTasks = tasks.filter((task) => {
//     if (filter === 'completed') return task.completed;
//     if (filter === 'unfinished') return !task.completed;
//     return true;
//   });

//   const sortedTasks = [...filteredTasks].sort((a, b) => {
//     switch (sort) {
//       case 'az':
//         return a.text.localeCompare(b.text);
//       case 'za':
//         return b.text.localeCompare(a.text);
//       case 'oldest':
//         return a.id - b.id;
//       case 'newest':
//       default:
//         return b.id - a.id;
//     }
//   });

//   return {
//     tasks: sortedTasks,
//     addTask,
//     deleteTask,
//     toggleComplete,
//     filter,
//     setFilter,
//     sort,
//     setSort,
//   };
// };

