"use client";
import { Box, Button, Callout, Card, CheckboxCards, Dialog, Flex, IconButton, Link, Separator, Strong, Table, Text, TextArea, TextField,  } from "@radix-ui/themes";
import { FullScreenModal } from "./ui/FullScreenModal";
import { AccountingToolOptions, useAccountingToolInviteTask } from "@/hooks/useAccountingToolInviteTask";
import { TaskSectionContainer } from "./ui/TaskSectionContainer";
import { XeroOptionContentPage1, XeroOptionContentPage2 } from "./AccountingToolInviteTaskContent/Xero";
import { QuickBooksOptionContentPage1, QuickBooksOptionContentPage2 } from "./AccountingToolInviteTaskContent/Quickbook";
import { OtherOptionContent } from "./AccountingToolInviteTaskContent/Other";
import { NoAccountingToolOptionContent } from "./AccountingToolInviteTaskContent/NoAccoutingTool";
import { ErrorToast, SuccessToast } from "./ui/Toast";
import { Task } from "@/types/tasks.types";

function EmptyContent() {
    return<></>
}

const getOptionContentPage1 = (
    selectedId: number | null,
    onCheckboxChange: (value: number) => void,
    accountingInputValue: string,
    handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  ) => {
    if (!selectedId) return <EmptyContent />;
  
    switch (selectedId) {
      case 1:
        return <XeroOptionContentPage1 handleCheckboxChange={onCheckboxChange} />;
      case 2:
        return <QuickBooksOptionContentPage1 handleCheckboxChange={onCheckboxChange}/>;
      case 3:
        return <OtherOptionContent handleTextChange={handleTextChange} accountingValueInput = {accountingInputValue}/>;
      case 4:
        return <NoAccountingToolOptionContent handleCheckboxChange={onCheckboxChange} />;
      default:
        return <EmptyContent />;
    }
  };
  
  const getOptionContentPage2 = (
    selectedId: number | null,
    onCheckboxChange: (value: number) => void
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
    handleCheckboxChange: (value: number) => void
    accountingInputValue: string
    handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

interface Page2Props {
    selectedId: number | null
    handleCheckboxChange: (value: number) => void
}

function Page1({ options, selectedId, handleSelectCard, handleCheckboxChange, accountingInputValue, handleTextChange}: Page1Props) {
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

   { getOptionContentPage1(selectedId, handleCheckboxChange, accountingInputValue, handleTextChange)}</div>)
}

function Page2({ selectedId, handleCheckboxChange}: Page2Props) {

   return (<>
  { getOptionContentPage2(selectedId, handleCheckboxChange)}</>)
}


export function AccountingToolInviteTask({task} : {task: Task}) {
    const {
        handleSelectCard, 
        selectedId, 
        options, 
        currentPage, 
        handleActionButton, 
        getButtonText, 
        handleBackButton,
        handleCheckboxChange, 
        isPageValid, 
        handleTextChange,
        otherAccountingToolinput, 
        handleCloseErrorToast, 
        showErrorToast, 
        showSuccessToast} = useAccountingToolInviteTask(task);

        return (
            <>
            <FullScreenModal
              onClose={handleBackButton}
              title="Invite Novabook to your accounting tool"
              actions={
                isPageValid ? (
                  <Button
                    onClick={handleActionButton}
                    color="gray"
                    variant="surface"
                    size="3"
                  >
                    {getButtonText()}
                  </Button>
                ) : (
                  <Button
                    onClick={() => {}}
                    disabled
                    color="gray"
                    variant="surface"
                    size="3"
                    className="disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {getButtonText()}
                  </Button>
                )
              }
            >
              {currentPage === 1 && (
                <Page1
                  options={options}
                  selectedId={selectedId}
                  handleSelectCard={handleSelectCard}
                  handleCheckboxChange={handleCheckboxChange}
                  handleTextChange={handleTextChange}
                  accountingInputValue ={otherAccountingToolinput}
                />
              )}
          
              {currentPage === 2 && (
                <Page2
                  selectedId={selectedId}
                  handleCheckboxChange={handleCheckboxChange}
                />
              )}
            </FullScreenModal>
            {showSuccessToast &&  <SuccessToast message={"Task completed"}/>}
            {showErrorToast  && <ErrorToast message={"Task could not be completed. Try again later."} onClose={handleCloseErrorToast}/>}
           
            
            </>
          )
        }