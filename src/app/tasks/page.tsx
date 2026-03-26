"use client";

import { CompletedTaskList } from "@/components/CompletedTaskList";
import { LoadingTaskList } from "@/components/LoadingTaskList";
import { PendingTasksList } from "@/components/PendingTaskList";
import TaskListContainer from "@/components/TaskListContainer";
import { TaskStatePage } from "@/components/TaskStatePage";
import { useTasks } from "@/hooks/useTasks";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button, SegmentedControl, Skeleton, Text } from "@radix-ui/themes";

export default function TasksPage() {
  const {
    selectedTab,
    handleTabChange,
    pendingTasks,
    completedTasks,
    pendingLoading,
    pendingError,
    completedError,
    completedLoading,
    fetchCompletedTasks,
    fetchPendingTasks,
  } = useTasks();

  return (
    <div className="w-full h-screen flex justify-center px-4 py-4">
      <div className="w-full max-w-2xl flex flex-col h-full">
        <div className="w-full flex justify-between items-center mb-4">
          <div>
            {selectedTab === "pending" ? (
              <Skeleton loading={pendingLoading}>
                <Text weight="medium" size="5">{pendingTasks?.taskCount ?? ""} Tasks </Text>
              </Skeleton>
            ) : (
              <Skeleton loading={pendingLoading}>
                <Text weight="medium" size="5">{completedTasks?.taskCount ?? ""} Tasks</Text>
              </Skeleton>
            )}
          </div>
          <SegmentedControl.Root
            value={selectedTab}
            onValueChange={handleTabChange}
            defaultValue="pending"
            radius="full"
          >
            <SegmentedControl.Item value="pending">
              Pending
            </SegmentedControl.Item>
            <SegmentedControl.Item value="completed">
              Completed
            </SegmentedControl.Item>
          </SegmentedControl.Root>
        </div>
        <div className="flex-1 overflow-auto">
          {selectedTab === "pending" && (
            <TaskListContainer
              isLoading={pendingLoading}
              isError={pendingError}
              fetchTask={fetchPendingTasks}
            >
              {pendingTasks?.tasks && (
                <div className="h-full">
                  <PendingTasksList
                    tasks={pendingTasks.tasks}
                    taskCount={pendingTasks.taskCount}
                  />
                </div>
              )}
            </TaskListContainer>
          )}
          {selectedTab === "completed" && (
            <TaskListContainer
              isLoading={completedLoading}
              isError={completedError}
              fetchTask={fetchCompletedTasks}
            >
              {completedTasks?.tasks && (
                <div className="h-full">
                  <PendingTasksList
                    tasks={completedTasks.tasks}
                    taskCount={completedTasks.taskCount}
                  />
                </div>
              )}
            </TaskListContainer>
          )}
        </div>
      </div>
    </div>
  );
}
