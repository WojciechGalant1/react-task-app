import { useState, useEffect } from 'react';
import { filterTasks } from '../utils/filter';
import { sortTasks } from '../utils/sort';
import { searchTasks } from '../utils/search';

export const useTasks = () => {

  const [filter, setFilter] = useState('all');     // 'all' | 'completed' | 'unfinished'
  const [sort, setSort] = useState('newest');      // 'newest' | 'oldest' | 'az' | 'za'
  const [searchQuery, setSearchQuery] = useState(''); // free-text search by task name
  const [priorityFilter, setPriorityFilter] = useState('any'); // 'any' | 'low' | 'medium' | 'high'
  const [dateFrom, setDateFrom] = useState(''); // ISO yyyy-mm-dd
  const [dateTo, setDateTo] = useState('');     // ISO yyyy-mm-dd

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

  const addTask = ({ text, tags = [], priority = "Low", details = "", startDate = "", endDate = "" }) => {
    const trimmed = text.trim();
    if (trimmed.length === 0) return;

    const newTask = {
      id: Date.now(),
      text: trimmed,
      completed: false,
      tags,
      priority,
      details,
      startDate,
      endDate,
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

  const tasksAfterSearch = searchTasks(tasks, searchQuery);

  const tasksAfterStatus = filterTasks(tasksAfterSearch, filter);

  const fromTs = dateFrom ? Date.parse(dateFrom) : null;
  const toTs = dateTo ? Date.parse(dateTo) : null;

  const tasksAfterAdvancedFilters = tasksAfterStatus.filter((task) => {
    const currentPriority = (task.priority || '').toLowerCase();
    const matchesPriority = priorityFilter === 'any' || currentPriority === priorityFilter;

    // Date range filter: keep tasks within [dateFrom, dateTo]
    // We check task's startDate and endDate if present; missing dates don't exclude the task.
    const taskStart = task.startDate ? Date.parse(task.startDate) : null;
    const taskEnd = task.endDate ? Date.parse(task.endDate) : null;

    let matchesFrom = true;
    if (fromTs != null) {
      // If task has an endDate, ensure it ends on/after fromTs; otherwise allow
      matchesFrom = taskEnd == null || taskEnd >= fromTs;
    }

    let matchesTo = true;
    if (toTs != null) {
      // If task has a startDate, ensure it starts on/before toTs; otherwise allow
      matchesTo = taskStart == null || taskStart <= toTs;
    }

    return matchesPriority && matchesFrom && matchesTo;
  });

  const visibleTasks = sortTasks(tasksAfterAdvancedFilters, sort);

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
    searchQuery,
    setSearchQuery,
    priorityFilter,
    setPriorityFilter,
    dateFrom,
    setDateFrom,
    dateTo,
    setDateTo,
    clearAllTasks,
  };
};

