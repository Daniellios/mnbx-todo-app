import React, { useState } from 'react';

interface TaskListControlsProps {
    addTask: (taskName: string) => void;
}

export const TaskListControls: React.FC<TaskListControlsProps> = ({
    addTask,
}) => {
    const [taskName, setTaskName] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const handleTaskNameChange = (
        e: React.FormEvent<HTMLInputElement>
    ): void => {
        setTaskName(e.currentTarget.value);
    };

    const showError = (): void => {
        setError(true);
        setTimeout(() => {
            setError(false);
        }, 1500);
    };

    const handleAddTask = (): void => {
        if (taskName !== '') {
            addTask(taskName);
            setTaskName('');
        } else {
            showError();
        }
    };

    return (
        <div className='flex h-12 w-full border-[1px] border-gray-500/25 rounded'>
            <input
                type='text'
                autoFocus
                placeholder={
                    error ? 'Cannot be empty' : 'What needs to be done?'
                }
                className={
                    error
                        ? 'input-error transition-all'
                        : 'h-full w-full px-4 rounded focus: border-none outline-none transition-all'
                }
                value={taskName}
                onChange={handleTaskNameChange}
            />
            <button
                data-testid='add-button'
                className='flex justify-center items-center text-gray-600 px-1 border-l-[1px] border-gray-500/25  text-center text-sm w-32 hover:cursor-pointer hover:bg-pink-300/40'
                onClick={handleAddTask}>
                Add To Do
            </button>
        </div>
    );
};
