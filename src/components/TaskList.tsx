"use client";

import { Task } from "@/types/tasks.types";
import { Badge, Flex, Table, Text } from "@radix-ui/themes";

// interface TaskListProps {
//   categoryName: string;
//   tasks: Task[];
// }

export const TaskList = () => (
  <Table.Root variant="surface">
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeaderCell>categoryName</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.RowHeaderCell>
          <Flex direction="column" gap="1">
            <Text weight="medium">John Doe</Text>
            <Text size="1" color="gray">
              john@example.com
            </Text>
          </Flex>
        </Table.RowHeaderCell>

        <Table.Cell>
          <Flex justify="end" align="center" style={{ height: "100%" }}>
            <Badge radius="full" color="gray" variant="outline" highContrast>
              New
            </Badge>
          </Flex>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Root>
);
