import { TaskList } from '@/components/TaskList/TaskList';
import { tasksMockData } from '@/constants/tasksMockData';
import { fireEvent, render, screen } from '@testing-library/react';

beforeEach(() => {
    const mockFN = jest.fn();
    render(<TaskList completeTask={mockFN} taskList={tasksMockData} />);
});

test('it renders rigth amount of todos', () => {
    const tasks = screen.getAllByTestId('task');
    expect(tasks).toHaveLength(3);
});

test('it completes task on click', () => {
    const onClick = jest.fn();
    const completeButton = screen.getAllByTestId('complete-button')[0];
    const task = screen.getAllByTestId('task-name')[0];

    completeButton.addEventListener('click', onClick);
    fireEvent.click(completeButton);

    expect(task).toHaveClass('line-through');
});
