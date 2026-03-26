"use client";
import { Box, Button, Card, CheckboxCards, Dialog, Flex, Link, Strong, Table, Text,  } from "@radix-ui/themes";
import { FullScreenModal } from "./ui/FullScreenModal";
import { useRouter } from "next/navigation";
import { AccountingToolOptions, useAccountingToolInviteTask } from "@/hooks/useAccountingToolInviteTask";
import { TaskSectionContainer } from "./ui/TaskSectionContainer";

interface PageContentProps {
    handleCheckboxChange: (value: string) => void
}

function XeroOptionContentPage1({handleCheckboxChange}: PageContentProps) {
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
    <CheckboxCards.Root defaultValue={["1"]} size="1" onValueChange={(values) =>handleCheckboxChange(values[0])}>
		<CheckboxCards.Item value="0" >I confirm I have created a Xero account.</CheckboxCards.Item>
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
    <CheckboxCards.Root defaultValue={["1"]} size="1"onValueChange={(values) =>handleCheckboxChange(values[0])}>
		<CheckboxCards.Item value="0">I confirm I have added my Company Registration Number on Xero.</CheckboxCards.Item>
	</CheckboxCards.Root>
      </TaskSectionContainer>

}
function XeroOptionContentPage2({handleCheckboxChange}: PageContentProps) {
    return<Text>Xero2</Text>
}


function QuickBooksOptionContentPage1({handleCheckboxChange}: PageContentProps) {
    return<Text>Quickbooks</Text>
}
function QuickBooksOptionContentPage2({handleCheckboxChange}: PageContentProps) {
    return<Text>Quickbooks2</Text>
}

function OtherOptionContent({handleCheckboxChange}: PageContentProps) {
    return<Text>Other</Text>
}
function NoAccountingToolOptionContent({handleCheckboxChange}: PageContentProps) {
    return<Text>no tool</Text>
}
function EmptyContent() {
    return<></>
}
const getOptionContentPage1 = (
    selectedId: number | null,
    onCheckboxChange: (value: string) => void
  ) => {
    if (!selectedId) return <EmptyContent />;
  
    switch (selectedId) {
      case 1:
        return <XeroOptionContentPage1 handleCheckboxChange={onCheckboxChange} />;
      case 2:
        return <QuickBooksOptionContentPage1 handleCheckboxChange={onCheckboxChange}/>;
      case 3:
        return <OtherOptionContent handleCheckboxChange={onCheckboxChange}/>;
      case 4:
        return <NoAccountingToolOptionContent handleCheckboxChange={onCheckboxChange} />;
      default:
        return <EmptyContent />;
    }
  };
  
  const getOptionContentPage2 = (
    selectedId: number | null,
    onCheckboxChange: (value: string) => void
  ) => {
    if (!selectedId) return <EmptyContent />;
  
    switch (selectedId) {
      case 1:
        return <XeroOptionContentPage2 handleCheckboxChange={onCheckboxChange} />;
      case 2:
        return <QuickBooksOptionContentPage2 handleCheckboxChange={onCheckboxChange}/>;
      default:
        return <EmptyContent />;
    }
  };

interface Page1Props {
    options : AccountingToolOptions[]
    selectedId: number | null
    handleSelectCard: (id: number) => void
    handleCheckboxChange: (value: string) => void
}

interface Page2Props {
    selectedId: number | null
    handleCheckboxChange: (value: string) => void
}

function Page1({ options, selectedId, handleSelectCard, handleCheckboxChange}: Page1Props) {
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

   { getOptionContentPage1(selectedId, handleCheckboxChange)}</div>)
}

function Page2({ selectedId, handleCheckboxChange}: Page2Props) {

   return (<>
  { getOptionContentPage2(selectedId, handleCheckboxChange)}</>)
}


export function AccountingToolInviteTask() {
    const {
        task,
        handleSelectCard, 
        selectedId, 
        options, 
        currentPage, 
        handleActionButton, 
        getButtonText, 
        handleBackButton,
        handleCheckboxChange, 
        isPageValid, checkboxCount } = useAccountingToolInviteTask();

        


    return (
    <FullScreenModal 
    onClose={handleBackButton} 
    title={"Invite Novabook to your accounting tool"} 
    actions ={<Button onClick = {handleActionButton}>{getButtonText()}</Button>}>
   
        {currentPage == 1 && <Page1 options={options} selectedId={selectedId} handleSelectCard={handleSelectCard} handleCheckboxChange={handleCheckboxChange}/>}
        {currentPage ==2 && <Page2 selectedId={selectedId} handleCheckboxChange={handleCheckboxChange}/>}
<Text>{checkboxCount}</Text>

    </FullScreenModal>
    )
  }