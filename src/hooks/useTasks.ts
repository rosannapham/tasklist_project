"use client";

import { useState, useEffect } from "react";

import { tasksApi } from "@/lib/api/tasks";
import { TasksResponse } from "@/types/tasks.types";

export function useTasks() {
  type TaskTab = "pending" | "completed";
  const [selectedTab, setSelectedTab] = useState<TaskTab>("pending");
  const [pendingTasks, setPendingTasks] = useState<TasksResponse>();
  const [completedTasks, setCompletedTasks] = useState<TasksResponse>();
const [pendingLoading, setPendingLoading] = useState(true);
const [completedLoading, setCompletedLoading] = useState(true);

const [pendingError, setPendingError] = useState<boolean>(false);
const [completedError, setCompletedError] = useState<boolean>(false);

const fetchPendingTasks = async () => {
  try {
    setPendingLoading(true);
    setPendingError(false);

    const pendingTasksData = await tasksApi.getPendingTasks();
    setPendingTasks(pendingTasksData);
  } catch (err) {
    setPendingError(true);
  } finally {
    setPendingLoading(false);
  }
};

const fetchCompletedTasks = async () => {
  try {
    setCompletedLoading(true);
    setCompletedError(false);

    const completedTasksData = await tasksApi.getCompletedTasks();
    setCompletedTasks(completedTasksData);
  } catch (err) {
    setCompletedError(true);
  } finally {
    setCompletedLoading(false);
  }
};

const fetchAllTasks = async () => {
    fetchPendingTasks(),
    fetchCompletedTasks()
};

  useEffect(() => {
    fetchAllTasks();
  }, []);

  const handleTabChange = (tab: TaskTab) => setSelectedTab(tab);
  return {
    selectedTab,
    handleTabChange,
    pendingTasks,
    completedTasks,
    pendingLoading,
    completedLoading,
    pendingError,
    completedError,
    fetchPendingTasks,
    fetchCompletedTasks
  };
}
