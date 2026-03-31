import {
  TasksApiResponse,
  Task,
  TasksResponse,
  TaskApi,
  AccountingToolBodyRequest,
  TaskUpdateRequest,
} from "@/types/tasks.types";
import {
  removeEmptyTaskCategories,
  transformTask,
  transformTasksFromApi,
} from "@/utils/transformer";

export const tasksApi = {
  async getAllTasks(): Promise<TasksApiResponse> {
    try {
      const response = await fetch("/api/tasks", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },

  async getPendingTasks(): Promise<TasksResponse> {
    try {
      const response = await fetch("/api/tasks/pending", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const tasks = removeEmptyTaskCategories(data.tasks);
      const totalCount = data.taskCount;
      return { tasks: transformTasksFromApi(tasks), taskCount: totalCount };
    } catch (error) {
      throw error;
    }``
  },

  async getCompletedTasks(): Promise<TasksResponse> {
    try {
      const response = await fetch("/api/tasks/completed", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return {
        tasks: transformTasksFromApi(data.tasks),
        taskCount: data.taskCount,
      };
    } catch (error) {

      throw error;
    }
  },

  async getTaskBySlug(slug: string): Promise<Task> {
    try {
      const response = await fetch(`/api/tasks/${slug}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: TaskApi = await response.json();

      return transformTask(data);
    } catch (error) {

      throw error;
    }
  },

  async postSaveAccountingTool(tool: AccountingToolBodyRequest) {
    try {
      const res = await fetch("/api/tasks/accounting-tool", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tool),
      });
    } catch (error) {
      throw error;
    }
  },

  async patchUpdateTaskbySlug(
    slug: string,
    body: TaskUpdateRequest,
  ): Promise<Task> {
    try {
      const response = await fetch(`/api/tasks/${slug}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: TaskApi = await response.json();

      return transformTask(data);
    } catch (error) {
      throw error;
    }
  },
};
