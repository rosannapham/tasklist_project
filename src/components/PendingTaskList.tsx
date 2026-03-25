import { TaskListProps } from "@/types/tasks.types";
import { TaskList } from "./TaskList";
import { getCategoryTitle } from "@/utils/transformer";


export function PendingTasksList({ tasks }: TaskListProps) {

  return (
    <div className="rounded-xl overflow-hidden border">
      {Object.entries(tasks).map(([category, taskList]) => (
        <TaskList
          tasks={taskList}
          categoryName={getCategoryTitle(category)}
          hasSubheadings={true}
        />
      ))}
    </div>
  );
}
