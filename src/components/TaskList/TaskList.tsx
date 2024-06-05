import React from 'react';
import Task from '../Task/Task';

interface TaskListProps {
    taskList: Task[];
    completeTask: (taskId: number) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
    taskList,
    completeTask,
}) => {
    return (
        <div className='w-full flex flex-col justify-center items-start gap-3 text-center'>
            {taskList.map((task: Task) => {
                return (
                    <Task
                        key={task.id}
                        taskName={task.taskName}
                        isCompleted={task.isCompleted}
                        id={task.id}
                        completeTask={completeTask}
                    />
                );
            })}
        </div>
    );
};
