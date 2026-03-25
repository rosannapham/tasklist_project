import { Tasks } from "@/types/tasks.types";
import { TaskList } from "./TaskList";

interface PendingTasksContainerProps {
  tasks: Tasks;
}

export function PendingTasksList({ tasks }: PendingTasksContainerProps) {
  return (
    <div className="rounded-xl overflow-hidden border">
      {Object.entries(tasks).map(([category, taskList]) => (
        <TaskList
          tasks={taskList}
          categoryName={category}
          hasSubheadings={true}
        />
      ))}
    </div>
  );
}
