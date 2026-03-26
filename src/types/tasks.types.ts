import { AccountingToolOptions } from "@/hooks/useAccountingToolInviteTask";

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
  tasks: TasksApi;
  taskCount: number;
}

export type Tasks = Record<string, Task[]>;

export interface TasksResponse {
  tasks: Tasks;
  taskCount: number;
}

export interface TaskListProps {
  tasks: Tasks;
  taskCount: number;
}

export interface EmptyTaskListProps {
  title: string;
  description: string;
}
export interface TaskStateProps {
  title: string;
  description: string;
  actions?: React.ReactNode;
}

export interface PageContentProps {
  handleCheckboxChange: (value: number) => void;
}

export interface OtherContentProps {
  accountingValueInput: string;
  handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface AccountingToolBodyRequest {
  task_id: string;
  accounting_tool: string;
  other_tool: string;
  non_compatible_banks: string;
}

export interface TaskUpdateRequest {
  status: string;
  completed_by: string;
}

export interface Page1Props {
  options: AccountingToolOptions[];
  selectedId: number | null;
  handleSelectCard: (id: number) => void;
  handleCheckboxChange: (value: number) => void;
  accountingInputValue: string;
  handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface Page2Props {
  selectedId: number | null;
  handleCheckboxChange: (value: number) => void;
}
