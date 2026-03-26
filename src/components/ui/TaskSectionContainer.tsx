import { Box, Flex } from "@radix-ui/themes";

interface TaskSectionContainerProps {
  children: React.ReactNode;
}

export function TaskSectionContainer({ children }: TaskSectionContainerProps) {
  return (
    <Box className="max-w-xl mx-auto p-4 border border-[var(--novaBlack-5)] rounded-lg bg-[var(--novaBlack-1)]">
      <Flex direction="column" gap="4">
        {children}
      </Flex>
    </Box>
  );
}
