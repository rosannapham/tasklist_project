import { LoadingContainer } from "@/components/LoadingContainer";
import { Task } from "@/types/tasks.types";

const TASK_COMPONENTS: Record<string, React.ComponentType<{task: Task}>> = {
    'accounting-tool-invite': LoadingContainer
}

function DefaultTaskContent({task}: {task: Task}) {
    return (
        <div>default page</div>
    )
}


import { TaskPageWrapper } from "@/components/TaskPageWrapper";

export default function DynamicTaskPage() {

    return (<div className="h-full"><TaskPageWrapper>{(task: Task) => {
        const TaskComponent = TASK_COMPONENTS[task.slug] || DefaultTaskContent;
        return <TaskComponent task={task}/>
    }}</TaskPageWrapper></div>
  
    );
  }