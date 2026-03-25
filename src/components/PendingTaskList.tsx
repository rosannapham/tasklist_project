import { TaskListProps } from "@/types/tasks.types";
import { TaskList } from "./TaskList";
import { getCategoryTitle } from "@/utils/transformer";
import { TaskStatePage } from "./TaskStatePage";


export function PendingTasksList({ tasks, taskCount }: TaskListProps) {
    if (taskCount == 0) {
        return (
            <div className="h-full">
            <TaskStatePage title={"Nothing to do right now"} 
            description={"Novabook will notify you when action is required"}/>
            </div>
        )
    }
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
