import React, { useState } from 'react';
import { useTasks } from '../hooks/useTasks';
import { useTheme } from '../hooks/useTheme';
import { TaskForm } from '../components/TaskForm';
import { TaskList } from '../components/TaskList';
import { TaskControls } from '../components/TaskControls';
import { Header } from '../components/Header';
import { OptionsModal } from '../components/OptionsModal';

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
  } = useTasks();

  const { theme, toggleTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <Header onOpenModal={() => setIsModalOpen(true)} />

    <OptionsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      
    <main>
      <div>
        <br />
        <TaskForm onAddTask={(text) => addTask(text)} />
        <TaskControls
          currentFilter={filter}
          setFilter={setFilter}
          currentSort={sort}
          setSort={setSort}
        />
        <TaskList
          tasks={tasks}
          onToggleComplete={toggleComplete}
          onDelete={deleteTask}
        />
      </div>
      
    </main>
   
    </>
    
  );
};

export default Home;
