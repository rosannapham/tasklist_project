"use client";

import { CompletedTaskList } from "@/components/CompletedTaskList";
import { LoadingTaskList } from "@/components/LoadingTaskList";
import { PendingTasksList } from "@/components/PendingTaskList";
import { useTasks } from "@/hooks/useTasks";
import { SegmentedControl, Skeleton, Text } from "@radix-ui/themes";

export default function TasksPage() {
  const { selectedTab, handleTabChange, pendingTasks, completedTasks, isLoading } = useTasks();
  return (
    <div className="w-full h-full flex justify-center px-4 py-4">
      <div className="w-full max-w-2xl ">
        <div className="w-full flex justify-between items-center mb-4">
          <Skeleton loading={isLoading}><Text>{`${pendingTasks?.taskCount} Tasks`}</Text></Skeleton>
          <SegmentedControl.Root value ={selectedTab} onValueChange={handleTabChange} defaultValue="pending" radius="full">
		<SegmentedControl.Item value="pending">Pending</SegmentedControl.Item>
		<SegmentedControl.Item value="completed">Completed</SegmentedControl.Item>
	</SegmentedControl.Root>
        </div>
        {isLoading && <LoadingTaskList/>}
        {pendingTasks?.tasks && selectedTab=== "pending" && <PendingTasksList tasks={pendingTasks.tasks} />}
        {completedTasks?.tasks && selectedTab=== "completed" && <CompletedTaskList tasks={completedTasks.tasks}/>}
      </div>
    </div>
  );
}
