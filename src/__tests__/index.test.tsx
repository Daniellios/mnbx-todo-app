import { render, fireEvent, screen } from '@testing-library/react';
import App from '@/App';
import { tasksMockData } from '@/constants/tasksMockData';

const addTodo = (list: Task[], item: Task) => [...list, item];

it('renders homepage correctly', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
});

it('Adds new todo to the list', () => {
    const newTodo = { taskName: 'Новое Задание', isCompleted: false, id: 4 };

    const expected = [
        ...tasksMockData,
        { taskName: 'Новое Задание', isCompleted: false, id: 4 },
    ];

    const result = addTodo(tasksMockData, newTodo);
    expect(result).toEqual(expected);
});

test('if calls add todo onclick function', () => {
    const onClick = jest.fn();
    render(<App />);
    const buttonElement = screen.getByTestId('add-button');
    buttonElement.addEventListener('click', onClick);
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
});

test('if error is shown on empty input', () => {
    const onClick = jest.fn();
    render(<App />);
    const inputElement = screen.getByPlaceholderText('What needs to be done?');
    const addTodoBtn = screen.getByText('Add To Do');
    addTodoBtn.addEventListener('click', onClick);
    fireEvent.click(addTodoBtn);
    expect(inputElement).toHaveClass('input-error');
});
