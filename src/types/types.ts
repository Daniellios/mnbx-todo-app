interface Task {
    taskName?: string;
    isCompleted: boolean;
    id: number;
}
type FilterStatus = 'all' | 'completed' | 'active';
