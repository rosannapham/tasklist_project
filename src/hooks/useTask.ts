"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { tasksApi } from "@/lib/api/tasks";
import { Task } from "@/types/tasks.types";

export function useTask() {
  const params = useParams();
  const slug = params.slug as string;

  const [task, setTask] = useState<Task | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false); 
  const [notFound, setNotFound] = useState(false);

  
    const fetchTask = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        setNotFound(false);

        const taskData = await tasksApi.getTaskBySlug(slug);
        setTask(taskData);
      } catch (err: any) {
        if (err.status === 404 || err.message?.includes("not found")) {
          setNotFound(true);
        } else {
          setIsError(true); 
        }
      } finally {
        setIsLoading(false);
      }
    }

    useEffect(() => {
        fetchTask()
    },[slug])



  return {
    task,
    isLoading,
    isError,  
    notFound,
    fetchTask

  };
}