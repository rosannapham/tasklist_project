import { EmptyTaskListProps } from "@/types/tasks.types";
import { Box, Container, Section, Text } from "@radix-ui/themes";
import { Fullscreen } from "lucide-react";

export function EmptyTaskList({ title, description}: EmptyTaskListProps) {

    return (

        <Container className="h-full">
  <Box className="w-full h-full border-2 border-dashed border-gray-400 rounded-xl flex items-center justify-center">
  <Container className="h-full">
 
        <Section height={"full"}></Section>

  </Container>
</Box>
</Container>
    );
  }