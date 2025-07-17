import React, { useState } from 'react';
import { useTasks } from '../hooks/useTasks';
import { useTheme } from '../hooks/useTheme';
import { TaskForm } from '../components/TaskForm';
import { TaskList } from '../components/TaskList';
import { TaskControls } from '../components/TaskControls';
import { Header } from '../components/Header';
import { OptionsModal } from '../components/OptionsModal';
import { Background } from '../components/Background';
import { Footer } from '../components/Footer';
import { useAlert } from '../components/AlertProvider';

const Home = () => {
  const {
    tasks,
    addTask,
    deleteTask,
    toggleComplete,
    filter,
    setFilter,
    sort,
    setSort,
    clearAllTasks,
  } = useTasks();

  const { theme, toggleTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { showAlert } = useAlert();

  const handleAdd = (task) => {
    addTask(task);
    showAlert("Task added!");
  };

  const handleDelete = (task) => {
    deleteTask(task);
    showAlert("Task deleted!");
  };

  const handleComplete = (id) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    const wasCompleted = task.completed;
    toggleComplete(id);
    showAlert(wasCompleted ? "Task marked as unfinished!" : "Task completed!");
  };

  const handleClearAllTasks = () => {
    clearAllTasks();
    showAlert("All tasks deleted!");
  };

  return (
    <>
      <Background />
      <Header onOpenModal={() => setIsModalOpen(true)} />

      <OptionsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        theme={theme}
        onToggleTheme={toggleTheme}
        onClearAll={handleClearAllTasks}
      />

      <main>
        <div>
          <br />
          <TaskForm onAddTask={handleAdd} />
          <TaskControls
            currentFilter={filter}
            setFilter={setFilter}
            currentSort={sort}
            setSort={setSort}
          />
          <TaskList
            tasks={tasks}
            onToggleComplete={handleComplete}
            onDelete={handleDelete}
          />
        </div>

      </main>
      <Footer />
    </>

  );
};

export default Home;
