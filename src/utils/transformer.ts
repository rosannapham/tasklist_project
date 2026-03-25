import { Task, TaskApi, Tasks, TasksApi } from "@/types/tasks.types";

export function removeEmptyTaskCategories(tasks: TasksApi): TasksApi {
  if (!tasks) {
    return {};
  }

  const result: TasksApi = {};

  Object.keys(tasks).forEach((key) => {
    const list = tasks[key];
    if (Array.isArray(list) && list.length > 0) {
      result[key] = list;
    }
  });

  return result;
}

export function transformTask({
    due_date,
    completed_at,
    completed_by,
    task_name,
    ...rest
}: TaskApi) : Task {
    return {
        ...rest,
        dueDate: due_date,
        completedAt: completed_at,
        completedBy: completed_by,
        name: task_name
    }
}

export function transformTasksFromApi(tasksApi: TasksApi): Tasks {
    const transformedTasks: Tasks = {};
  
    for (const [category, taskList] of Object.entries(tasksApi)) {
      transformedTasks[category] = taskList.map((task: TaskApi) => transformTask(task));
    }
  
    return transformedTasks;
  }
