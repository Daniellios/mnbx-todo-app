export const getTasksCount = (todoList: Task[]): string => {
    let msg = 'Nothing to do :)';

    if (!todoList || todoList.length === 0) {
        return msg;
    }

    const completedCount: Task[] = todoList.filter((task) => !task.isCompleted);

    if (completedCount.length === 1) {
        msg = '1 item left';
        return msg;
    } else if (completedCount.length > 1) {
        msg = `${completedCount.length} items left`;
        return msg;
    }

    return msg;
};
