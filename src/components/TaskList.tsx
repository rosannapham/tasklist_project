"use client";

import { Task } from "@/types/tasks.types";
import { Badge, Flex, Table, Text } from "@radix-ui/themes";

interface TaskListProps {
  categoryName?: string;
  tasks: Task[];
  hasSubheadings?: boolean;
}

export function TaskList({
  categoryName,
  tasks,
  hasSubheadings = false,
}: TaskListProps) {
  return (
    <Table.Root variant="surface" className="rounded-none border-0 border-b last:border-b-0">
      {hasSubheadings && (
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>{categoryName}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell />
          </Table.Row>
        </Table.Header>
      )}

      {/* Table body */}
      <Table.Body>
        {tasks.map((task) => (
          <Table.Row key={task.id}>
            <Table.RowHeaderCell>
              <Flex direction="column" gap="1">
                <Text weight="medium">{task.name}</Text>
                <Text size="1" color="gray">
                  {task.dueDate}
                  {task.completedAt
                    ? ` (Completed on ${task.completedAt})`
                    : ""}
                </Text>
              </Flex>
            </Table.RowHeaderCell>

            <Table.Cell>
              <Flex justify="end" align="center" style={{ height: "100%" }}>
                <Badge
                  radius="full"
                  color="gray"
                  variant="outline"
                  highContrast
                >
                  New
                </Badge>
              </Flex>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
