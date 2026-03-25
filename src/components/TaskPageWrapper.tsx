import { useTask } from "@/hooks/useTask";

export function TaskPageWrapper() {
    const { 
        task,
        isLoading,
        isError,  
        notFound
    } = useTask()

    return (
    
 
    );
  }