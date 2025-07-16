import React, { useState } from 'react';

export const TaskForm = ({ onAddTask }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim().length === 0) return;

        onAddTask(input);
        setInput('');
    }

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit} className="taskForm" autoComplete="off">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    id="taskInpt"
                    placeholder="task name..."
                />
                <button
                    type="submit"
                    id="addBtn"
                    disabled={input.trim().length === 0}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    Add new task
                </button>
            </form>
        </div>

    );
};