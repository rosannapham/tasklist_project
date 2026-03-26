"use client";
import { Box, Button, Card, CheckboxCards, Dialog, Flex, Link, Strong, Table, Text,  } from "@radix-ui/themes";
import { FullScreenModal } from "./ui/FullScreenModal";
import { useRouter } from "next/navigation";
import { AccountingToolOptions, useAccountingToolInviteTask } from "@/hooks/useAccountingToolInviteTask";
import { TaskSectionContainer } from "./ui/TaskSectionContainer";

function XeroOptionContentPage1() {
    return<TaskSectionContainer>      
        <Text as="div" size="3" weight="bold" className="mb-4">
    Set up Xero
  </Text>
  <Text as="div" size="3" weight="regular" className="mb-4">
       1. Create a Xero Account
      </Text>
      <Flex direction="column" gap ="1">
      <Text color="gray" size="1">
      • Use <Link href='#'>Novabook's referral link</Link> for a document.
		</Text>
        <Text color="gray" size="1">
      • The <Strong> Grow plan </Strong> is the best fit for most businesses.
		</Text>
        <Text color="gray" size="1">
      • If you use multi-currency bank accounts then select the <Strong>Comprehensive plan</Strong>
		</Text>
	</Flex>
    <CheckboxCards.Root defaultValue={["1"]} size="1">
		<CheckboxCards.Item value="1">I confirm I have created a Xero account.</CheckboxCards.Item>
	</CheckboxCards.Root>

    <Text as="div" size="3" weight="regular" className="mb-4">
       2. Add your Company Registration Number on Xero
      </Text>
      <Flex direction="column" gap ="1">
      <Text color="gray" size="1">
      1. Go to "Organisation Settings", then "Organisation details".
		</Text>
        <Text color="gray" size="1">
      2. Under "Basic Information", add your Comapny Registration Number.
		</Text>
        <Text color="gray" size="1">
      3. Click "Save Changes"
		</Text>
	</Flex>
    <CheckboxCards.Root defaultValue={["1"]} size="1">
		<CheckboxCards.Item value="1">I confirm I have added my Company Registration Number on Xero.</CheckboxCards.Item>
	</CheckboxCards.Root>
      </TaskSectionContainer>

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
    return (<div className="space-y-6">
    <TaskSectionContainer>
          
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
   </TaskSectionContainer>

  { SelectedContentPage1 && (
    <SelectedContentPage1/>
  )}</div>)
}

function Page2({ selectedId, }: Page2Props) {
    const SelectedContentPage2 = selectedId ? OPTION_CONTENT_PAGE_2[selectedId] : EmptyContent
   return (<>
  { SelectedContentPage2 && (
    <SelectedContentPage2/>
  )}</>)
}


export function AccountingToolInviteTask() {
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