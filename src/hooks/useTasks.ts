"use client";

import { useState, useEffect } from "react";

import { tasksApi } from "@/lib/api/tasks";
import { Task, TasksResponse } from "@/types/tasks.types";

export function useTasks() {
  type TaskTab = "pending" | "completed";
  const [selectedTab, setSelectedTab] = useState<TaskTab>("pending");
  const [pendingTasks, setPendingTasks] = useState<TasksResponse>();
  const [completedTasks, setCompletedTasks] = useState<TasksResponse>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [accountingTask, setTask] = useState<Task>();

  const fetchPendingTasks = async () => {
    try {
        setIsLoading(true);
      setError(null);

      const pendingTasksData = await tasksApi.getPendingTasks();
      const completedTasksData = await tasksApi.getCompletedTasks();
      setPendingTasks(pendingTasksData);
      setCompletedTasks(completedTasksData);

    } catch (err) {
      setError("Failed to load tasks");
      console.error("Error fetching tasks:", err);
    } finally {
        setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPendingTasks();
  }, []);

  const handleTabChange = (tab: TaskTab) => setSelectedTab(tab);
  return {
    selectedTab,
    handleTabChange,
    pendingTasks,
    completedTasks,
    isLoading
  };
}
