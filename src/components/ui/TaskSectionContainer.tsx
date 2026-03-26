import { Box, Flex } from "@radix-ui/themes";

interface  TaskSectionContainerProps{
    children: React.ReactNode
}


export function TaskSectionContainer({children}: TaskSectionContainerProps) {
    
    return ( <Box className="max-w-xl mx-auto p-4 border rounded-lg bg-white">
        <Flex direction="column" gap ="4" >
          
        {children}

    </Flex>
  </Box>
    )}