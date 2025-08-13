import React, { useState } from 'react';
import { useTasks } from '../hooks/useTasks';
import { useTheme } from '../hooks/useTheme';
import { TaskForm } from '../components/TaskForm';
import { TaskList } from '../components/TaskList';
import { TaskControls } from '../components/TaskControls';
import { Header } from '../components/Header';
import { OptionsModal } from '../components/OptionsModal';
import { TaskAdvancedControls } from '../components/TaskAdvancedControls';
import { Background } from '../components/Background';
import { Footer } from '../components/Footer';
import { useAlert } from '../components/AlertProvider';
import { ConfirmModal } from '../components/ConfirmModal';

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
    searchQuery,
    setSearchQuery,
    clearAllTasks,
  } = useTasks();

  const { showAlert } = useAlert();
  const { theme, toggleTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [group, setGroup] = useState('none');
  const [confirmModal, setConfirmModal] = useState({ isOpen: false, message: '', onConfirm: null });

  const openConfirm = (message, onConfirm) => {
    setConfirmModal({ isOpen: true, message, onConfirm });
  };

  const closeConfirm = () => {
    setConfirmModal({ ...confirmModal, isOpen: false });
  };

  const handleAdd = (task) => {
    addTask(task);
    showAlert("Task added!");
  };

  const handleDelete = (task) => {
    openConfirm("Are you sure you want to delete this task?", () => {
      deleteTask(task);
      showAlert("Task deleted!");
      closeConfirm();
    });
  };

  const handleComplete = (id) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    const wasCompleted = task.completed;
    toggleComplete(id);
    showAlert(wasCompleted ? "Task marked as unfinished!" : "Task completed!");
  };

  const handleClearAllTasks = () => {
    openConfirm("This will delete all tasks. Continue?", () => {
      clearAllTasks();
      showAlert("All tasks deleted!");
      closeConfirm();
    });
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

      {isAdvancedOpen && (
        <TaskAdvancedControls
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          currentGroup={group}
          setGroup={setGroup}
          onClose={() => setIsAdvancedOpen(false)}
        />
      )}

      <main>
        <div>
          <br />
          <TaskForm onAddTask={handleAdd} />
          <TaskControls
            currentFilter={filter}
            setFilter={setFilter}
            currentSort={sort}
            setSort={setSort}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onOpenAdvanced={() => setIsAdvancedOpen(true)}
          />
          <TaskList
            tasks={tasks}
            onToggleComplete={handleComplete}
            onDelete={handleDelete}
            groupBy={group}
          />
        </div>

      </main>
      <Footer />
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        message={confirmModal.message}
        onConfirm={confirmModal.onConfirm}
        onCancel={closeConfirm}
      />
    </>

  );
};

export default Home;
