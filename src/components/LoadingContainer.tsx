import { Box, Flex } from "@radix-ui/themes";
import { NovabookLogo } from "./ui/NovabookLogo";

export function LoadingContainer() {

    return (
    <Box className="w-full h-full  flex items-center justify-center">
    <Flex justify="center" direction="column" align="center" gap="2" className="h-full text-center">
     <NovabookLogo />
    </Flex>
    </Box>
    );
  }