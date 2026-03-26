"use client";
import { OtherContentProps } from "@/types/tasks.types";
import { TaskSectionContainer } from "../ui/TaskSectionContainer";
import { Text, TextArea } from "@radix-ui/themes";

export function OtherOptionContent({
  handleTextChange,
  accountingValueInput,
}: OtherContentProps) {
  return (
    <TaskSectionContainer>
      <Text as="div" size="2">
        What accounting tool does your company use?
      </Text>
      <TextArea
        size="2"
        placeholder="Lloyds business savings..."
        value={accountingValueInput}
        onChange={(e) => handleTextChange(e)}
      ></TextArea>
    </TaskSectionContainer>
  );
}
