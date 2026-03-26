"use client";
import { PageContentProps } from "@/types/tasks.types";
import { TaskSectionContainer } from "../ui/TaskSectionContainer";
import {
  Card,
  CheckboxCards,
  Flex,
  IconButton,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { CopyIcon } from "@radix-ui/react-icons";

export function QuickBooksOptionContentPage1({
  handleCheckboxChange,
}: PageContentProps) {
  return (
    <TaskSectionContainer>
      <Text as="div" size="3" weight="medium">
        Invite Novabook to Quickbooks
      </Text>
      <Text as="div" size="2" weight="regular">
        1. On Quickbooks, click the Settings icon (top right), then select
        "Manage Users".
      </Text>

      <Text as="div" size="2" weight="regular">
        2. Switch to the "Accounting Firms" tab, then invite a new user using
        the details below.
      </Text>
      <Card>
        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Email address
            </Text>
            <TextField.Root
              radius="full"
              defaultValue="books@novabook.com"
              disabled
            >
              <TextField.Slot />
              <TextField.Slot>
                <IconButton
                  size="1"
                  variant="ghost"
                  color="gray"
                  onClick={() =>
                    navigator.clipboard.writeText("books@Novabook.com")
                  }
                >
                  <CopyIcon height="14" width="14" />
                </IconButton>
              </TextField.Slot>
            </TextField.Root>
          </label>
        </Flex>
      </Card>
      <CheckboxCards.Root
        defaultValue={[]}
        size="1"
        onValueChange={(values) => handleCheckboxChange(values.length)}
      >
        <CheckboxCards.Item value="2">
          I confirm I have invited Novabook.
        </CheckboxCards.Item>
      </CheckboxCards.Root>
    </TaskSectionContainer>
  );
}

export function QuickBooksOptionContentPage2({
  handleCheckboxChange,
}: PageContentProps) {
  return (
    <TaskSectionContainer>
      <Text as="div" size="3" weight="bold">
        Missing Bank Accounts
      </Text>
      <Text as="div" size="2" weight="regular" className="mb-4">
        List any bank accounts you are not able to connect to Quickbooks.
      </Text>
      <TextArea size="2" placeholder="Lloyds business savings..."></TextArea>
      <CheckboxCards.Root
        defaultValue={[]}
        size="1"
        onValueChange={(values) => handleCheckboxChange(values.length)}
      >
        <CheckboxCards.Item value="2">
          I confirm I have listed any bank accounts that could not be connected
          to Quickbooks.
        </CheckboxCards.Item>
      </CheckboxCards.Root>
    </TaskSectionContainer>
  );
}
