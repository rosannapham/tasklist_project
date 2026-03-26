"use client";
import { Button } from "@radix-ui/themes";
import { FullScreenModal } from "./ui/FullScreenModal";
import { useAccountingToolInviteTask } from "@/hooks/useAccountingToolInviteTask";
import Page2 from "./AccountingToolInviteTaskContent/AcountingToolInvitePageTwo";
import Page1 from "./AccountingToolInviteTaskContent/AccoutingToolInvitePageOne";
import { Task } from "@/types/tasks.types";

export function AccountingToolInviteTask({ task }: { task: Task }) {
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
  } = useAccountingToolInviteTask(task);

  return (
    <>
      <FullScreenModal
        onClose={handleBackButton}
        title="Invite Novabook to your accounting tool"
        actions={
          isPageValid ? (
            <Button
              onClick={handleActionButton}
              variant="solid"
              size="3"
              radius="full"
            >
              {getButtonText()}
            </Button>
          ) : (
            <Button
              onClick={() => {}}
              disabled
              color="gray"
              radius="full"
              variant="soft"
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
            accountingInputValue={otherAccountingToolinput}
          />
        )}

        {currentPage === 2 && (
          <Page2
            selectedId={selectedId}
            handleCheckboxChange={handleCheckboxChange}
          />
        )}
      </FullScreenModal>
    </>
  );
}
