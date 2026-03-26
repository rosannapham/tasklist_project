import { Page1Props } from "@/types/tasks.types";
import EmptyContent from "./EmptyContent";
import { NoAccountingToolOptionContent } from "./NoAccoutingTool";
import { OtherOptionContent } from "./Other";
import { QuickBooksOptionContentPage1 } from "./Quickbook";
import { XeroOptionContentPage1 } from "./Xero";
import { TaskSectionContainer } from "../ui/TaskSectionContainer";
import { Button, Text } from "@radix-ui/themes";

const getOptionContentPage1 = (
  selectedId: number | null,
  onCheckboxChange: (value: number) => void,
  accountingInputValue: string,
  handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
) => {
  if (!selectedId) return <EmptyContent />;

  switch (selectedId) {
    case 1:
      return <XeroOptionContentPage1 handleCheckboxChange={onCheckboxChange} />;
    case 2:
      return (
        <QuickBooksOptionContentPage1 handleCheckboxChange={onCheckboxChange} />
      );
    case 3:
      return (
        <OtherOptionContent
          handleTextChange={handleTextChange}
          accountingValueInput={accountingInputValue}
        />
      );
    case 4:
      return (
        <NoAccountingToolOptionContent
          handleCheckboxChange={onCheckboxChange}
        />
      );
    default:
      return <EmptyContent />;
  }
};

export default function Page1({
  options,
  selectedId,
  handleSelectCard,
  handleCheckboxChange,
  accountingInputValue,
  handleTextChange,
}: Page1Props) {
  return (
    <div className="space-y-6">
      <TaskSectionContainer>
        <Text as="div" size="3" weight="bold" className="mb-4">
          Which accounting tool do you use?
        </Text>
        {options.map((option) => {
          return selectedId === option.id ? (
            <Button
              variant="outline"
              size="3"
              onClick={() => handleSelectCard(option.id)}
            >
              <Text size="2" align="left" as="div" weight="regular" className="w-full">
                {option.label}
              </Text>
            </Button>
          ) : (
            <Button
              color="gray"
              variant="surface"
              highContrast
              size="3"
              onClick={() => handleSelectCard(option.id)}
            >
              <Text size="2" align="left" as="div" weight="regular" className="w-full">
                {option.label}
              </Text>
            </Button>
          );
        })}
      </TaskSectionContainer>

      {getOptionContentPage1(
        selectedId,
        handleCheckboxChange,
        accountingInputValue,
        handleTextChange,
      )}
    </div>
  );
}
