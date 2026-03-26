import { Badge, Flex, Skeleton, Table, Text } from "@radix-ui/themes";

export function LoadingTaskList() {
  const skeletonRows = Array.from({ length: 10 });
  return (
    <Table.Root variant="surface">
      <Table.Body>
        {skeletonRows.map((_, index) => (
          <Table.Row>
            <Table.RowHeaderCell>
              <Flex direction="column" gap="1">
                <div className="rounded-full">
                  <Text>
                    <Skeleton>Loading Task Title</Skeleton>
                  </Text>
                </div>
                <Text>
                  <Skeleton className="rounded-full w-[120px]">
                    Loading
                  </Skeleton>
                </Text>
              </Flex>
            </Table.RowHeaderCell>

            <Table.Cell>
              <Flex justify="end" align="center" style={{ height: "100%" }}>
                <Skeleton>
                  <Badge
                    radius="full"
                    color="gray"
                    variant="outline"
                    highContrast
                  >
                    Loading
                  </Badge>
                </Skeleton>
              </Flex>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
