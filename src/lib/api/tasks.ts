import { TasksApiResponse, Task } from "@/types/tasks.types";
import { removeEmptyTaskCategories } from "@/utils/transformer";

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
      console.error("Failed to fetch tasks:", error);
      throw error;
    }
  },

  async getPendingTasks(): Promise<TasksApiResponse> {
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
      return { tasks: tasks, taskCount: totalCount };
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
      throw error;
    }
  },

  async getCompletedTasks(): Promise<TasksApiResponse> {
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
      return data;
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
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

      const data: Task = await response.json();

      return data;
    } catch (error) {
      console.error("Failed to fetch task:", error);
      throw error;
    }
  },
};
