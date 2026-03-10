import { useState, useEffect, useMemo, useCallback } from 'react';
import { filterTasks } from '../utils/filter';
import { sortTasks } from '../utils/sort';
import { searchTasks } from '../utils/search';
import { api } from '../utils/api';
import { useAuth } from '../context/AuthContext';

export const useTasks = () => {
  const { user } = useAuth();
  
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('any');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load guest tasks from localStorage
  const getGuestTasks = () => {
    try {
      const stored = localStorage.getItem('guest_tasks');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error('Failed to parse guest tasks:', e);
      return [];
    }
  };

  // Save guest tasks to localStorage
  const saveGuestTasks = (newTasks) => {
    localStorage.setItem('guest_tasks', JSON.stringify(newTasks));
  };

  // Fetch tasks based on login status
  const fetchTasks = useCallback(async () => {
    setLoading(true);
    if (user) {
      try {
        const data = await api.get('/tasks');
        setTasks(data);
      } catch (e) {
        console.error('Failed to fetch tasks from API:', e);
      }
    } else {
      setTasks(getGuestTasks());
    }
    setLoading(false);
  }, [user]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const addTask = async ({ text, tags = [], priority = "Low", details = "", startDate = "", endDate = "" }) => {
    const trimmed = text.trim();
    if (trimmed.length === 0) return;

    if (user) {
      try {
        const newTask = await api.post('/tasks', {
          text: trimmed,
          tags,
          priority,
          details,
          startDate,
          endDate,
        });
        setTasks((prev) => [newTask, ...prev]);
      } catch (e) {
        console.error('Failed to add task to API:', e);
      }
    } else {
      const newTask = {
        id: Date.now(), // Local ID for guests
        text: trimmed,
        completed: false,
        tags,
        priority,
        details,
        startDate,
        endDate,
        userId: null
      };
      const updated = [newTask, ...tasks];
      setTasks(updated);
      saveGuestTasks(updated);
    }
  };

  const deleteTask = async (id) => {
    if (user) {
      try {
        await api.delete(`/tasks/${id}`);
        setTasks((prev) => prev.filter((task) => task.id !== id));
      } catch (e) {
        console.error('Failed to delete task from API:', e);
      }
    } else {
      const updated = tasks.filter((task) => task.id !== id);
      setTasks(updated);
      saveGuestTasks(updated);
    }
  };

  const toggleComplete = async (id) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    if (user) {
      try {
        const updatedTask = await api.patch(`/tasks/${id}`, {
          completed: !task.completed
        });
        setTasks((prev) =>
          prev.map((t) => (t.id === id ? updatedTask : t))
        );
      } catch (e) {
        console.error('Failed to toggle completion on API:', e);
      }
    } else {
      const updated = tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      );
      setTasks(updated);
      saveGuestTasks(updated);
    }
  };

  const visibleTasks = useMemo(() => {
    const tasksAfterSearch = searchTasks(tasks, searchQuery);
    const tasksAfterStatus = filterTasks(tasksAfterSearch, filter);

    const fromTs = dateFrom ? Date.parse(dateFrom) : null;
    const toTs = dateTo ? Date.parse(dateTo) : null;

    const tasksAfterAdvancedFilters = tasksAfterStatus.filter((task) => {
      const currentPriority = (task.priority || '').toLowerCase();
      const matchesPriority = priorityFilter === 'any' || currentPriority === priorityFilter;

      const taskStart = task.startDate ? Date.parse(task.startDate) : null;
      const taskEnd = task.endDate ? Date.parse(task.endDate) : null;

      let matchesFrom = true;
      if (fromTs != null) {
        matchesFrom = taskEnd == null || taskEnd >= fromTs;
      }

      let matchesTo = true;
      if (toTs != null) {
        matchesTo = taskStart == null || taskStart <= toTs;
      }

      return matchesPriority && matchesFrom && matchesTo;
    });

    return sortTasks(tasksAfterAdvancedFilters, sort);
  }, [tasks, filter, sort, searchQuery, priorityFilter, dateFrom, dateTo]);

  const clearAllTasks = () => {
    if (!user) {
      localStorage.removeItem('guest_tasks');
    }
    setTasks([]);
  };

  return {
    tasks: visibleTasks,
    loading,
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

