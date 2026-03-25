import { TaskStateProps } from "@/types/tasks.types";
import { Box, Button, Flex, Text } from "@radix-ui/themes";

export function TaskStatePage({ title, description, onClick, icon, buttonLabel}: TaskStateProps) {

    return (
    <Box className="w-full h-full flex items-center justify-center">
    <Flex justify="center" direction="column" align="center" gap="2" className="h-full text-center">
        <Text size="4" weight="medium" >
        {title}
        </Text>
        <Text size="2" color="gray">
        {description}
        </Text>
        <Button radius="full"  color="gray" variant="soft" onClick={onClick}>
		{icon}
        {buttonLabel}
	</Button>
    </Flex>
    </Box>
    );
  }