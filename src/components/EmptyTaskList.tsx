import { EmptyTaskListProps } from "@/types/tasks.types";
import { Box, Container, Section } from "@radix-ui/themes";

export function EmptyTaskList({ title, description}: EmptyTaskListProps) {

    return (
        <div className="h-full w-full flex items-center justify-center">
        <Box
         className="w-full h-full border-2 border-dashed border-gray-400 rounded-xl flex items-center justify-center">
    
          
    </Box>
    </div>
    );
  }