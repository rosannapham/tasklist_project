import { TaskListProps, Tasks } from "@/types/tasks.types";
import { TaskList } from "./TaskList";
import { EmptyTaskList } from "./EmptyTaskList";



export function CompletedTaskList({ tasks }: TaskListProps) {
  return (
    // <div className="rounded-xl overflow-hidden border">
    //   {Object.entries(tasks).map(([category, taskList]) => (
    //     <TaskList
    //       tasks={taskList}
    //       categoryName={category}
    //       hasSubheadings={false}
    //     />
    //   ))}
    // </div>
    <EmptyTaskList title={"hi"} description={"hi"}/>
  );
}