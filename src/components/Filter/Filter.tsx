import { getTasksCount } from '@/utils/getTasksCount';
import React from 'react';

interface FilterProps {
    todoList: Task[];
    setTodoList: React.Dispatch<React.SetStateAction<Task[]>>;
    setStatus: React.Dispatch<React.SetStateAction<FilterStatus>>;
    currentStatus: string;
}

const Filter: React.FC<FilterProps> = ({
    todoList,
    setTodoList,
    setStatus,
    currentStatus,
}) => {
    const handleFilterChange = (filterStatus: FilterStatus): void => {
        setStatus(filterStatus);
    };

    const clearCompleted = (): void => {
        setTodoList(todoList.filter((task: Task) => !task.isCompleted));
    };

    return (
        <div className='w-full flex justify-between items-center'>
            <span
                data-testid='items-counter'
                className='text-xs sm:text-lg text-gray-500/70 w-[130px]'>
                {getTasksCount(todoList)}
            </span>
            <div className='flex gap-1 md:gap-4'>
                <button
                    onClick={() => handleFilterChange('all')}
                    className={
                        currentStatus === 'all'
                            ? 'filter-button-active'
                            : 'filter-button'
                    }>
                    All
                </button>
                <button
                    onClick={() => handleFilterChange('active')}
                    className={
                        currentStatus === 'active'
                            ? 'filter-button-active'
                            : 'filter-button'
                    }>
                    Active
                </button>
                <button
                    onClick={() => handleFilterChange('completed')}
                    className={
                        currentStatus === 'completed'
                            ? 'filter-button-active'
                            : 'filter-button'
                    }>
                    Completed
                </button>
            </div>

            <button onClick={clearCompleted} className='filter-button'>
                Clear Completed
            </button>
        </div>
    );
};

export default Filter;
