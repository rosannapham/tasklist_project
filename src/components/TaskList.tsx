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
    <Table.Root className="rounded-none">
      {hasSubheadings && (
        <Table.Header className="bg-gray-100">
          <Table.Row>
            <Table.ColumnHeaderCell >{categoryName}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell />
          </Table.Row>
        </Table.Header>
      )}
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
                  {task.category}
                </Badge>
              </Flex>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
