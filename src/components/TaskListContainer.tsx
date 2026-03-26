"use client";
import { Tasks } from "@/types/tasks.types";
import { TaskStatePage } from "./TaskStatePage";
import { Button } from "@radix-ui/themes";
import { ReloadIcon } from "@radix-ui/react-icons";
import { LoadingTaskList } from "./LoadingTaskList";

interface TaskListContainerProps {
    children: React.ReactNode;
    isLoading: boolean, 
    isError: boolean,
    tasks?: Tasks;
    fetchTask: () => void
  }
export default function TaskListContainer({ children, isLoading, isError, tasks, fetchTask }: TaskListContainerProps) {
    if (isLoading) return <LoadingTaskList/>

    if (isError) {
        return (<div className="h-full">
            <TaskStatePage
              title={"Something went wrong loading this"}
              description={"ID: 02458"}
              actions={
                <Button
                  color="gray"
                  variant="soft"
                  radius="full"
                  highContrast
                  onClick={fetchTask}
                >
                <ReloadIcon /> Try again
                </Button>
              }
            />
          </div>)

     

    }
    return <>{children}</>
  }