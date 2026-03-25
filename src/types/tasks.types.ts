export interface TaskApi {
  id: string;
  status: string;
  created_at: string;
  slug: string;
  category: string;
  due_date: string;
  completed_at: string;
  completed_by: string;
  task_name: string;
}

export interface Task {
    id: string;
    status: string;
    created_at: string;
    slug: string;
    category: string;
    dueDate: string;
    completedAt: string;
    completedBy: string;
    name: string;
  }

export type TasksApi = Record<string, TaskApi[]>;

export interface TasksApiResponse {
  tasks: TasksApi
  taskCount: number;
}

export type Tasks = Record<string, Task[]>;

export interface TasksResponse{
  tasks: Tasks
  taskCount: number;
}

export interface TaskListProps {
    tasks: Tasks;
    taskCount: number
  }

  export interface EmptyTaskListProps {
    title: string
    description: string
  }
  export interface TaskStateProps {
    title: string
    description: string
    onClick: () => void;
    icon?: React.ReactNode
    buttonLabel: string
  }