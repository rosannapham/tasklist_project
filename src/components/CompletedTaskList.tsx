"use client";
import { TaskListProps } from "@/types/tasks.types";
import { TaskStatePage } from "./TaskStatePage";
import router from "next/router";
import { Button } from "@radix-ui/themes";
import { TaskList } from "./TaskList";




export function CompletedTaskList({ tasks, taskCount }: TaskListProps) {

    if (taskCount == 0) {
        return (
            <div className="h-full">
            <TaskStatePage title={"No completed tasks yet"} 
            description={"Completed tasks will appear hear once finished"}/>
            </div>
        )
    }

  return (
    <div className=" rounded-xl overflow-hidden border border-[var(--novaBlack-8)]">
      {Object.entries(tasks).map(([category, taskList]) => (
        <TaskList
          tasks={taskList}
          categoryName={category}
          hasSubheadings={false}
        />
      ))}
    </div>
  );

}