"use client";
import { Box, Button, Card, Dialog, Flex, Table, Text,  } from "@radix-ui/themes";
import { FullScreenModal } from "./ui/FullScreenModal";
import { useRouter } from "next/navigation";
import { AccountingToolOptions, useAccountingToolInviteTask } from "@/hooks/useAccountingToolInviteTask";

function XeroOptionContentPage1() {
    return<Text>Xero</Text>
}
function XeroOptionContentPage2() {
    return<Text>Xero2</Text>
}


function QuickBooksOptionContentPage1() {
    return<Text>Quickbooks</Text>
}
function QuickBooksOptionContentPage2() {
    return<Text>Quickbooks2</Text>
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
const OPTION_CONTENT_PAGE_1:  Record<number, React.ComponentType> = {
    1:  XeroOptionContentPage1, 
    2:  QuickBooksOptionContentPage1, 
    3: OtherOptionContent,
    4:  NoAccountingToolOptionContent
}

const OPTION_CONTENT_PAGE_2:  Record<number, React.ComponentType> = {
    1:  XeroOptionContentPage2,
    2: QuickBooksOptionContentPage2,
}

interface Page1Props {
    options : AccountingToolOptions[]
    selectedId: number | null
    handleSelectCard: (id: number) => void
}

interface Page2Props {
 
    selectedId: number | null

}

function Page1({ options, selectedId, handleSelectCard}: Page1Props) {
    const SelectedContentPage1 = selectedId ? OPTION_CONTENT_PAGE_1[selectedId] : EmptyContent
    return (<>       <Box className="max-w-md mx-auto p-4 border rounded-lg bg-white">
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

  { SelectedContentPage1 && (
    <SelectedContentPage1/>
  )}</>)
}

function Page2({ selectedId, }: Page2Props) {
    const SelectedContentPage2 = selectedId ? OPTION_CONTENT_PAGE_2[selectedId] : EmptyContent
   return (<>
  { SelectedContentPage2 && (
    <SelectedContentPage2/>
  )}</>)
}


export function AccountingToolInviteTask() {
    const router = useRouter()
    const {task, handleSelectCard, selectedId, options, currentPage, handleActionButton, getButtonText, handleBackButton } = useAccountingToolInviteTask();


    return (
    <FullScreenModal 
    onClose={handleBackButton} 
    title={"Invite Novabook to your accounting tool"} 
    actions ={<Button onClick = {handleActionButton}>{getButtonText()}</Button>}>
   
        {currentPage == 1 && <Page1 options={options} selectedId={selectedId} handleSelectCard={handleSelectCard }/>}
        {currentPage ==2 && <Page2 selectedId={selectedId}/>}

    </FullScreenModal>
    )
  }