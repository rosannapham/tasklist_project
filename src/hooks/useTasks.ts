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
  const [error, setError] = useState<boolean>(false);
  const [accountingTask, setTask] = useState<Task>();

  const fetchPendingTasks = async () => {
    try {
      setIsLoading(true);
      setError(false);

      const pendingTasksData = await tasksApi.getPendingTasks();
      const completedTasksData = await tasksApi.getCompletedTasks();
      setPendingTasks(pendingTasksData);
      setCompletedTasks(completedTasksData);
    } catch (err) {
      setError(true);
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
    isLoading,
    error,
  };
}
