import { render } from '@testing-library/react';
import Task from '@/components/Task/Task';

it('renders task with the right props', () => {
    const { container } = render(
        <Task
            taskName={'Task'}
            isCompleted={true}
            id={1}
            completeTask={() => {}}
        />
    );
    expect(container).toMatchSnapshot();
});
