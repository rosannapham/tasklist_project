import { TaskListProps } from "@/types/tasks.types";
import { TaskStatePage } from "./TaskStatePage";
import router from "next/router";
import { ReloadIcon } from "@radix-ui/react-icons";




export function CompletedTaskList({ tasks, taskCount }: TaskListProps) {

//     if (taskCount == 0) {
//         return (
//             <div className="h-full">
//             <EmptyTaskList title={"No completed tasks yet"} description={"Completed tasks will appear hear once finished"}/>
//             </div>
//         )
//     }

//   return (
//     <div className="rounded-xl overflow-hidden border">
//       {Object.entries(tasks).map(([category, taskList]) => (
//         <TaskList
//           tasks={taskList}
//           categoryName={category}
//           hasSubheadings={false}
//         />
//       ))}
//     </div>
//   );

return <TaskStatePage title={"hi"} description={"hi"} onClick={() => {router.push(`/tasks`)}} buttonLabel={"hi"} icon={<ReloadIcon/>}/>


}