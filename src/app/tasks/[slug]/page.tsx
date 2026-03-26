
"use client";
import { Task } from "@/types/tasks.types";
import { TaskPageWrapper } from "@/components/TaskPageWrapper";
import { AccountingToolInviteTask } from "@/components/AccountingToolInviteTask";

const TASK_COMPONENTS: Record<string, React.ComponentType<{task: Task}>> = {
    'accounting-tool-invite': AccountingToolInviteTask
}

function DefaultTaskContent({task}: {task: Task}) {
    return (
        <div>default page</div>
    )
}

export default function DynamicTaskPage() {

    return (<div className="h-full"><TaskPageWrapper>{(task: Task) => {
        const TaskComponent = TASK_COMPONENTS[task.slug] || DefaultTaskContent;
        return <TaskComponent task={task}/>
    }}</TaskPageWrapper></div>
  
    );
  }