"use client";

import { CompletedTaskList } from "@/components/CompletedTaskList";
import { LoadingTaskList } from "@/components/LoadingTaskList";
import { PendingTasksList } from "@/components/PendingTaskList";
import { TaskStatePage } from "@/components/TaskStatePage";
import { useTasks } from "@/hooks/useTasks";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button, SegmentedControl, Skeleton, Text } from "@radix-ui/themes";

export default function TasksPage() {
  const { selectedTab, handleTabChange, pendingTasks, completedTasks, isLoading, error } = useTasks();
  
  if (error)   return (
    <div className="h-full">
        
    <TaskStatePage title={"Something went wrong loading this"} 
    description={"ID: 02458"} 
    actions = {
                <Button color="gray" variant="soft" radius="full" highContrast onClick={fetchTask}>
                    <ReloadIcon/> Try again
                </Button>
            }/>
    </div>
)
  
  
  return (
    <div className="w-full h-screen flex justify-center px-4 py-4">
  <div className="w-full max-w-2xl flex flex-col h-full">
    <div className="w-full flex justify-between items-center mb-4">
      <Skeleton loading={isLoading}>
      <Text>
  {selectedTab === "pending"
    ? `${pendingTasks?.taskCount ?? ""} Tasks`
    : `${completedTasks?.taskCount ?? ""} Tasks`}
</Text>
      </Skeleton>
      <SegmentedControl.Root
        value={selectedTab}
        onValueChange={handleTabChange}
        defaultValue="pending"
        radius="full"
      >
        <SegmentedControl.Item value="pending">Pending</SegmentedControl.Item>
        <SegmentedControl.Item value="completed">Completed</SegmentedControl.Item>
      </SegmentedControl.Root>
    </div>
    <div className="flex-1 overflow-auto">
      {isLoading && <LoadingTaskList />}
      
      {pendingTasks?.tasks && selectedTab === "pending" && (
        <div className="h-full"><PendingTasksList tasks={pendingTasks.tasks} taskCount={pendingTasks.taskCount} /></div>
      )}
      {completedTasks?.tasks && selectedTab === "completed" && (
        <div className="h-full"><CompletedTaskList tasks={completedTasks.tasks} taskCount={completedTasks.taskCount} /></div>
      )}
    </div>
  </div>
</div>
  );
}
