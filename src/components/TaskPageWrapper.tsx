"use client";
import { useTask } from "@/hooks/useTask";
import { LoadingContainer } from "./LoadingContainer";
import { TaskStatePage } from "./TaskStatePage";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Task } from "@/types/tasks.types";

interface TaskPageWrapperProps {
    children: (task:Task) => React.ReactNode
}

interface TaskContainerWrapperProps {
    children:  React.ReactNode
}

function TaskStateContainer({children}:TaskContainerWrapperProps) {
    return ( <div className="h-screen p-6">{children}</div>)

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
    if (isLoading) return (<TaskStateContainer><LoadingContainer/></TaskStateContainer>)
    if (!task || notFound) return (<TaskStateContainer><TaskStatePage 
        title={"This task can't be found."} 
        description={"The task you're trying to open doesn't exist, or the link may be out of date."} 
        actions = { 
            <Button color="gray" variant="soft" radius="full" highContrast onClick={() => {router.push(`/tasks`)}}>
                View all tasks
            </Button>
        }
        />
        </TaskStateContainer>)
    if (isError) return (<TaskStateContainer><TaskStatePage 
    title={"Something went wrong loading this"} 
    description={"ID: 02458"} 
    actions = {
                <Button color="gray" variant="soft" radius="full" highContrast onClick={fetchTask}>
                    <ReloadIcon/> Try again
                </Button>
            }
    />
    </TaskStateContainer>)

    if (task.status == "completed") return (<TaskStateContainer><TaskStatePage 
    title={"This task has already been completed"} 
    description={"It may have been completed by you or another member of your team"} 
    actions = { 
                <Button  color="gray" variant="soft" radius="full" highContrast onClick={() => {router.push(`/tasks`)}}>
                    View all tasks
                </Button>
            }
    />
    </TaskStateContainer>)

    return<>{children}</>

   
  }