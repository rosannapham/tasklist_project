'use client';

import { useState, useEffect } from 'react';
import { tasksApi } from '@/lib/api/tasks';
import { Task } from '@/types/tasks.types';
import { useRouter } from 'next/navigation';

export interface AccountingToolOptions {
    id: number;
    label: string;
  }

export function useAccountingToolInviteTask() {
    type TaskTab = "pending" | "completed"
  const [task, setTask] = useState<Task>();
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const[checkboxCount, setCheckboxCount] = useState<number>(0)

  const router = useRouter()


  const options: AccountingToolOptions[] = [
    { id: 1, label: "Xero" },
    { id: 2, label: "QuickBooks" },
    { id: 3, label: "Other" },
    { id: 4, label: "I do not have an accounting tool" },
  ];

  const multiStepOptions = [1,2]
  const singleStepOtions = [3,4]

  const requiredChexboxCount : {[optionId: number] :{ [page:number] :number}} = {
    1: { 1: 1,
        2: 2 },
    2: {1: 1,
        2: 1
     },
    3: {1: 0},
    4: {1: 2}

  }

  const fetchTask = async () => {
    try {
        setLoading(true);
      setError(null);

      const data = await tasksApi.getTaskBySlug("accounting-tool-invite");
      setTask(data)
      console.log(data)


    } catch (err) {
      setError('Failed to load tasks');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {fetchTask() }, []);

  const handleSelectCard = (id: number) => {
    setSelectedId(id)
    setCheckboxCount(0)
  }

  const handleCheckboxChange = (value: number) => {
    setCheckboxCount((prev) => prev + (value === 1 ? 1 : -1));
  };

  const isPageValid = (): boolean => {
    if (!selectedId) return false;
    const requiredCount = requiredChexboxCount?.[selectedId]?.[currentPage]
    return checkboxCount === requiredCount


  }

  const getButtonText = (): string => { 
    if (selectedId && singleStepOtions.includes(selectedId)) return "Complete Task";
    return "Continue"
  }

  const handleActionButton = () => {
    if (selectedId && multiStepOptions.includes(selectedId) && currentPage === 1) {
        setCurrentPage(2)
    } else {
        router.push(`/tasks`)
    }
  }

  const handleBackButton = () => {
    if (selectedId && multiStepOptions.includes(selectedId) && currentPage === 2) {
        setCurrentPage(1)
    } else {
        router.push(`/tasks`)
    }
  }


  return {
    task, selectedId, handleSelectCard, options, currentPage, getButtonText, handleActionButton, handleBackButton, handleCheckboxChange, isPageValid: isPageValid(), checkboxCount};
}