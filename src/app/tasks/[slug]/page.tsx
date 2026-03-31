"use client";
import { Task } from "@/types/tasks.types";
import { TaskPageWrapper } from "@/components/TaskPageWrapper";
import { AccountingToolInviteTask } from "@/components/AccountingToolInviteTask";
import { VatSetup } from "@/components/VatSetup";


const TASK_COMPONENTS: Record<string, React.ComponentType<{ task: Task }>> = {
  "accounting-tool-invite": AccountingToolInviteTask,
  "vat-setup": VatSetup
};

function DefaultTaskContent() {
  return <div>This page has not been created yet.</div>;
}

export default function DynamicTaskPage() {
  return (
    <div className="h-full">
      <TaskPageWrapper>
        {(task: Task) => {
          const TaskComponent =
            TASK_COMPONENTS[task.slug] || DefaultTaskContent;
          return <TaskComponent task={task} />;
        }}
      </TaskPageWrapper>
    </div>
  );
}
