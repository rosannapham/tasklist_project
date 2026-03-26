"use client";
import { PageContentProps } from "@/types/tasks.types";
import { CheckboxCards, Flex, Link, Strong, Text } from "@radix-ui/themes";
import { TaskSectionContainer } from "../ui/TaskSectionContainer";

export function NoAccountingToolOptionContent({
  handleCheckboxChange,
}: PageContentProps) {
  return (
    <TaskSectionContainer>
      <Text as="div" size="3" weight="bold" className="mb-4">
        Set up Xero
      </Text>
      <Text as="div" size="3" weight="regular" className="mb-4">
        1. Create a Xero Account
      </Text>
      <Flex direction="column" gap="1">
        <Text color="gray" size="1">
          • Use <Link href="#">Novabook's referral link</Link> for a document.
        </Text>
        <Text color="gray" size="1">
          • The <Strong> Grow plan </Strong> is the best fit for most
          businesses.
        </Text>
        <Text color="gray" size="1">
          • If you use multi-currency bank accounts then select the{" "}
          <Strong>Comprehensive plan</Strong>
        </Text>
      </Flex>
      <CheckboxCards.Root
        defaultValue={[]}
        size="1"
        onValueChange={(values) => handleCheckboxChange(values.length)}
      >
        <CheckboxCards.Item value="1">
          I confirm I have created a Xero account.
        </CheckboxCards.Item>
      </CheckboxCards.Root>

      <Text as="div" size="3" weight="regular" className="mb-4">
        2. Add your Company Registration Number on Xero
      </Text>
      <Flex direction="column" gap="1">
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
      <CheckboxCards.Root
        defaultValue={[]}
        size="1"
        onValueChange={(values) => handleCheckboxChange(values.length)}
      >
        <CheckboxCards.Item value="2">
          I confirm I have added my Company Registration Number on Xero.
        </CheckboxCards.Item>
      </CheckboxCards.Root>
    </TaskSectionContainer>
  );
}
