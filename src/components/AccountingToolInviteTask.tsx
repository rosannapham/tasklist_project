"use client";
import { Box, Button, Card, Dialog, Flex, Table, Text,  } from "@radix-ui/themes";
import { FullScreenModal } from "./ui/FullScreenModal";
import { useRouter } from "next/navigation";
import { useAccountingToolInviteTask } from "@/hooks/useAccountingToolInviteTask";

function XeroOptionContent() {
    return<Text>Xero</Text>
}

function QuickBooksOptionContent() {
    return<Text>Quickbooks</Text>
}

function OtherOptionContent() {
    return<Text>Other</Text>
}
function NoAccountingToolOptionContent() {
    return<Text>no tool</Text>
}
function EmptyContent() {
    return<></>
}
const OPTION_CONTENT: Record<number, React.ComponentType> = {
    1: XeroOptionContent,
    2: QuickBooksOptionContent,
    3: OtherOptionContent,
    4: NoAccountingToolOptionContent
}


export function AccountingToolInviteTask() {
    const router = useRouter()
    const {task, handleSelectCard, selectedId, options } = useAccountingToolInviteTask();
    const SelectedContent = selectedId ? OPTION_CONTENT[selectedId] : EmptyContent
    return (
    <FullScreenModal onClose={() => {router.push(`/tasks`)}} title={"Invite Novabook to your accounting tool"}>
          <Box className="max-w-md mx-auto p-4 border rounded-lg bg-white">
        <Flex direction="column" gap ="4" >
          
        <Text as="div" size="3" weight="bold" className="mb-4">
        Which accounting tool do you use?
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

  { SelectedContent && (
    <SelectedContent/>
  )}

    </FullScreenModal>
    )
  }