"use client";
import { Box, Button, Card, Dialog, Flex, Table, Text,  } from "@radix-ui/themes";
import { FullScreenModal } from "./ui/FullScreenModal";
import { useRouter } from "next/navigation";
import { useAccountingToolInviteTask } from "@/hooks/useAccountingToolInviteTask";

export function AccountingToolInviteTask() {
    const router = useRouter()
    const {task, handleSelectCard, selectedId, options } = useAccountingToolInviteTask();
    return (
    <FullScreenModal onClose={() => {router.push(`/tasks`)}} title={"Invite Novabook to your accounting tool"}>
          <Box className="max-w-md mx-auto p-4 border rounded-lg bg-white">
        <Flex direction="column" gap ="4" >
          
        <Text as="div" size="3" weight="bold" className="mb-4">
        Do you want to proceed?
      </Text>
         {options.map((option) => {


    return (
        <Button color="gray" variant="surface" highContrast size="3" onClick={() => handleSelectCard(option.id)}>
            <Text align="left" as="div" weight="regular" className="w-full">{option.label}</Text>
		
	</Button>
    );
  })}
    </Flex>
    {selectedId}
  </Box>

    </FullScreenModal>
    )
  }