import { Tasks } from "@/types/tasks.types";
import { TaskList } from "./TaskList";

interface PendingTasksContainerProps {
    tasks: Tasks;
  }
  
  export function PendingTasksList({ tasks }: PendingTasksContainerProps) {
    return (
      <div>
        {Object.entries(tasks).map(([category, taskList]) => (
          <TaskList tasks={taskList} categoryName={category} hasSubheadings={true}   />
        ))}
      </div>
    );
  }