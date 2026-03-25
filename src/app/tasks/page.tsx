"use client";

import { PendingTasksList } from "@/components/PendingTaskList";
import { useTasks } from "@/hooks/useTasks";
import { SegmentedControl } from "@radix-ui/themes";

export default function TasksPage() {
  const { selectedTab, handleTabChange, pendingTasks } = useTasks();
  return (
    <div className="w-full h-full flex justify-center px-4 py-4">
      <div className="w-full max-w-2xl ">
        <div className="w-full flex justify-between items-center mb-4">
          <>{pendingTasks?.taskCount} Tasks</>
          <SegmentedControl.Root value ={selectedTab} defaultValue="pending" radius="full">
		<SegmentedControl.Item value="pending">Pending</SegmentedControl.Item>
		<SegmentedControl.Item value="completed">Completed</SegmentedControl.Item>
	</SegmentedControl.Root>
        </div>
        {pendingTasks?.tasks && selectedTab=== "pending" && <PendingTasksList tasks={pendingTasks.tasks} />}
      </div>
    </div>
  );
}
