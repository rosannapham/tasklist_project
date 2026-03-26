
"use client";
import { Task } from "@/types/tasks.types";
import { TaskPageWrapper } from "@/components/TaskPageWrapper";
import { AccountingToolInviteContent } from "@/components/AccountingToolInvitePage";

const TASK_COMPONENTS: Record<string, React.ComponentType<{task: Task}>> = {
    'accounting-tool-invite': AccountingToolInviteContent
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