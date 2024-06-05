import { useEffect, useState } from 'react';
import './index.css';
import { tasksMockData } from '@/constants/tasksMockData';
import { TaskList } from '@/components/TaskList/TaskList';
import { TaskListControls } from '@/components/TaskListControls/TaskListControls';
import Filter from '@/components/Filter/Filter';

function App() {
    const [todoList, setTodoList] = useState<Task[]>(tasksMockData);
    const [filteredTodos, setFilteredTodos] = useState<Task[]>([]);
    const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');

    const completeTask = (taskNumber: number): void => {
        setTodoList(
            todoList.map((task: Task) => {
                if (task.id === taskNumber) {
                    return {
                        ...task,
                        isCompleted: !task.isCompleted,
                    };
                }
                return task;
            })
        );
    };

    const addTask = (taskName: string): void => {
        const newID = Number((Math.random() * 1000).toFixed(2));
        const newTask = { taskName, isCompleted: false, id: newID };
        setTodoList([...todoList, newTask]);
    };

    const filterHandler = (): void => {
        switch (filterStatus) {
            case 'completed':
                setFilteredTodos(todoList.filter((task) => task.isCompleted));
                break;
            case 'active':
                setFilteredTodos(todoList.filter((task) => !task.isCompleted));
                break;
            case 'all':
                setFilteredTodos(todoList);
                break;
        }
    };

    useEffect(() => {
        filterHandler();
    }, [todoList, filterStatus]);

    return (
        <main className='container mx-auto flex flex-col items-center justify-start h-screen p-4 '>
            <h1 className='text-5xl md:text-[5rem] leading-normal font-thin text-pink-300/50 '>
                todos
            </h1>

            <div className='flex flex-col w-full min-w-[345px] gap-6 lg:w-[80%] xl:max-w-[800px] shadow-lg p-4 border-[1px] border-gray-500/10'>
                <TaskListControls addTask={addTask} />

                <TaskList
                    completeTask={completeTask}
                    taskList={filteredTodos}
                />

                <Filter
                    todoList={todoList}
                    setTodoList={setTodoList}
                    setStatus={setFilterStatus}
                    currentStatus={filterStatus}
                />
            </div>
        </main>
    );
}

export default App;
