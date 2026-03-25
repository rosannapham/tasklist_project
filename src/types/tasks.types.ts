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

export type Tasks = Record<string, Task[]>;

export interface TasksApiResponse {
  tasks: Tasks;
  taskCount: number;
}
