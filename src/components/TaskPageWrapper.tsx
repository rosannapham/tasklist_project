"use client";
import { useTask } from "@/hooks/useTask";
import { LoadingContainer } from "./LoadingContainer";
import { TaskStatePage } from "./TaskStatePage";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { ReloadIcon } from "@radix-ui/react-icons";

interface TaskPageWrapperProps {
    children: React.ReactNode
}


export function TaskPageWrapper({children}:TaskPageWrapperProps) {
    const { 
        task,
        isLoading,
        isError,  
        notFound,
        fetchTask
    } = useTask()
    const router = useRouter()
    if (isLoading) return <LoadingContainer/>
    if (!task || notFound) return (<div className="h-full"><TaskStatePage 
        title={"This task can't be found."} 
        description={"The task you're trying to open doesn't exist, or the link may be out of date."} 
        actions = { 
            <Button color="gray" variant="soft" radius="full" highContrast onClick={() => {router.push(`/tasks`)}}>
                View all tasks
            </Button>
        }
        />
        </div>)
    if (isError) return <TaskStatePage 
    title={"Something went wrong loading this"} 
    description={"ID: 02458"} 
    actions = {
                <Button color="gray" variant="soft" radius="full" highContrast onClick={fetchTask}>
                    <ReloadIcon/> Try again
                </Button>
            }
    />

    if (task.status == "completed") return <TaskStatePage 
    title={"This task has already been completed"} 
    description={"It may have been completed by you or another member of your team"} 
    actions = { 
                <Button color="gray" variant="soft" radius="full" highContrast onClick={() => {router.push(`/tasks`)}}>
                    View all tasks
                </Button>
            }
    />

    return<>{children}</>

   
  }