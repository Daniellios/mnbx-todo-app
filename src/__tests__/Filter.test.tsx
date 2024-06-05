import {
    // act,
    cleanup,
    fireEvent,
    render,
    screen,
} from '@testing-library/react';
import App from '@/App';

beforeEach(() => {
    render(<App />);
});

afterEach(cleanup);

test('if all filter is active by default', () => {
    const showAllButton = screen.getByText('All');
    expect(showAllButton).toHaveClass('filter-button-active');
});

test('if filter activates on click', () => {
    const showAllButton = screen.getByText('All');
    expect(showAllButton).toHaveClass('filter-button-active');

    const showActiveButton = screen.getByText('Active');
    fireEvent.click(showActiveButton);
    expect(showActiveButton).toHaveClass('filter-button-active');

    const showCompletedButton = screen.getByText('Completed');
    fireEvent.click(showCompletedButton);
    expect(showCompletedButton).toHaveClass('filter-button-active');
});

it('counts items left correctly', () => {
    const todosCount = screen.getByTestId('items-counter');
    expect(todosCount).toHaveTextContent('Nothing to do :)');
});
