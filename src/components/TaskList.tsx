"use client";

import { Task } from "@/types/tasks.types";
import { Badge, Flex, Skeleton, Strong, Table, Text } from "@radix-ui/themes";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

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
    const router = useRouter()
  return (
    <Table.Root className="rounded-none">
      {hasSubheadings === true && (
        <Table.Header className="bg-[var(--novaBlack-2)]">
          <Table.Row>
            <Table.RowHeaderCell>
                <Flex direction="row" gap="2">
                <Strong>{categoryName}</Strong> 
                <Text>{tasks.length}</Text>
                </Flex>
            </Table.RowHeaderCell>
            <Table.RowHeaderCell>
            </Table.RowHeaderCell>
          </Table.Row>
        </Table.Header>
      )}
      <Table.Body className="bg-[var(--novaBlack-1)]">
        {tasks.map((task) => (
          <Table.Row className="hover:bg-[var(--novaBlack-3)] active:bg-[var(--novaBlack-4)]" key={task.id} onClick={() => router.push(`/tasks/${task.slug}`)}>
            <Table.RowHeaderCell >
              <Flex direction="column" gap="1">
                <Text weight="medium">{task.name}</Text>
                <Text size="1" className={`${categoryName=== "Overdue" ? "text-red-700" : "text-[var(--novaBlack-10)]"}`}>
                {dayjs(task.dueDate).format("DD MMMM YYYY")}
                  {task.completedAt
                    ? ` (Completed on ${dayjs(task.completedAt).format("DD MMMM YYYY")})`
                    : ""}
                </Text>
              </Flex>
            </Table.RowHeaderCell>

            <Table.Cell>
              <Flex justify="end" align="center" style={{ height: "100%" }}>
                <Badge
                  radius="full"
                  color="gray"
                  variant="surface"
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
