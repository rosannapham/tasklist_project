import { EmptyTaskListProps } from "@/types/tasks.types";
import { Box, Container, Flex, Section, Text } from "@radix-ui/themes";
import { Fullscreen } from "lucide-react";

export function EmptyTaskList({ title, description}: EmptyTaskListProps) {

    return (
    <Box className="w-full h-full border-2 border-dashed border-gray-400 rounded-xl flex items-center justify-center">
    <Flex justify="center" direction="column" align="center" gap="2" className="h-full text-center">
        <Text size="4" weight="medium" >
        {title}
        </Text>
        <Text size="2" color="gray">
        {description}
        </Text>
    </Flex>
    </Box>
    );
  }