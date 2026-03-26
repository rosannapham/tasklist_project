import { TaskStateProps } from "@/types/tasks.types";
import { Box, Button, Flex, Text } from "@radix-ui/themes";


export function TaskStatePage({ title, description, actions}: TaskStateProps) {

    return (
        
    <Box className="w-full h-full border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center">
    <Flex justify="center" direction="column" align="center" gap="2" className="h-full text-center">
        <Text size="4" weight="medium" >
        {title}
        </Text>
        <Text size="2" color="gray">
        {description}
        </Text>
        <div className="mt-4">
        {actions}
        </div>
    </Flex>
    </Box>
    );
  }