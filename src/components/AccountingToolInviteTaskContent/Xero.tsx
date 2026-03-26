"use client";
import { Card, CheckboxCards, Flex, IconButton, Table, Text, TextArea, TextField } from "@radix-ui/themes"
import { TaskSectionContainer } from "../ui/TaskSectionContainer"
import { CopyIcon } from "@radix-ui/react-icons"
import { PageContentProps } from "@/types/tasks.types"

export function XeroOptionContentPage1({handleCheckboxChange}: PageContentProps) {
 
    return(
        <TaskSectionContainer>      
        <Text as="div" size="3" weight="bold">
    Invite Novabook to Xero
  </Text>
  <Text as="div" size="2" weight="regular">
       1. On Xero, go to Settings, then Users.
      </Text>

    <Text as="div" size="2" weight="regular">
       2. Invite a new user, using the details below
      </Text>
      <Card>
      <Flex direction="row" gap ="1">
      <Flex direction="column" gap="3">
			<label>
				<Text as="div" size="2" mb="1" weight="bold">
					Name
				</Text>
				<TextField.Root
                radius="full"
				defaultValue= "Novabook"
                disabled
				>
                    <TextField.Slot/>
                    <TextField.Slot>
                    <IconButton size="1" variant="ghost" color="gray" onClick={() => navigator.clipboard.writeText("Novabook")}>
					<CopyIcon height="14" width="14" />
                    </IconButton>
                    </TextField.Slot>
     
                </TextField.Root>
			</label>
            </Flex>
            <Flex direction="column" gap="3">
			<label>
				<Text as="div" size="2" mb="1" weight="bold">
					First name
				</Text>
				<TextField.Root
                radius="full"
				defaultValue= "Books"
                disabled
				>
                    <TextField.Slot/>
                    <TextField.Slot>
                    <IconButton size="1" variant="ghost" color="gray" onClick={() => navigator.clipboard.writeText("Books")}>
					<CopyIcon height="14" width="14" />
                    </IconButton>
                    </TextField.Slot>
                </TextField.Root>
			</label>
            </Flex>
            <Flex direction="column" gap="3">
			<label>
				<Text as="div" size="2" mb="1" weight="bold">
					Email address
				</Text>
				<TextField.Root
                radius="full"
				defaultValue= "books@Novabook.com"
                disabled
				>
                    <TextField.Slot/>
                    <TextField.Slot>
                    <IconButton size="1" variant="ghost" color="gray" onClick={() => navigator.clipboard.writeText("books@Novabook.com")}>
					<CopyIcon height="14" width="14" />
                    </IconButton>
                    </TextField.Slot>
                </TextField.Root>
			</label>
            </Flex>
	</Flex>
    </Card>
    <Table.Root className="rounded-xl overflow-hidden border">
	<Table.Body>
    <Table.Row>
			<Table.RowHeaderCell>Enable "Projects" and select "Admin".</Table.RowHeaderCell>
		</Table.Row>
		<Table.Row>
			<Table.RowHeaderCell>Enable "Payroll admin".</Table.RowHeaderCell>
		</Table.Row>

		<Table.Row>
			<Table.RowHeaderCell>
                <Flex direction="column" gap="1">
                    <Text>Enable "Business and accouting" and select "Advisor".</Text>
                    <Text>Under "Advisor", enable.</Text>
                    <Flex direction="column" gap="1" className="ml-2">
                        <Text>
                            • Bank account admin
                        </Text>
                        <Text>
                            • File MTD VAT return
                        </Text>
                        <Text>
                            • Manage users
                        </Text>
                    </Flex>
                </Flex>
            </Table.RowHeaderCell>
		</Table.Row>

	</Table.Body>
</Table.Root>

    <CheckboxCards.Root defaultValue={[]} size="1"onValueChange={(values) =>handleCheckboxChange(values.length)}>
		<CheckboxCards.Item value="2">I confirm I have ainvited Novabook and enabled correct permissions.</CheckboxCards.Item>
	</CheckboxCards.Root>
      </TaskSectionContainer>
    )

}
export function XeroOptionContentPage2({handleCheckboxChange}: PageContentProps) {
    return(  <div className="space-y-6"><TaskSectionContainer>      
        <Text as="div" size="3" weight="bold" className="mb-4">
    Connect your Bank Account to Xero
    </Text>
    <Text as="div" size="2" weight="regular" className="mb-4">
       1. On Xero, go to "Accounting", then "Bank Accounts".
    </Text>
        <Flex direction="column" gap="1">
    <Text as="div" size="2" weight="regular" className="mb-4">
       2. Click "Add Bank Account" and select your bank.
      </Text>
      <div className="ml-4">
      <Text color="gray" size="1">
       Select the earliest possible date to import transactions from.
		</Text>
        </div>
        </Flex>
        <Text as="div" size="2" weight="regular" className="mb-4">
       2. Repeat for all your business bank accounts.
      </Text>

    <CheckboxCards.Root defaultValue={[]} size="1"onValueChange={(values) =>handleCheckboxChange(values.length)}>
		<CheckboxCards.Item value="2">I confirm I have added my Company Registration Number on Xero.</CheckboxCards.Item>
	</CheckboxCards.Root>
      </TaskSectionContainer>
      <TaskSectionContainer>      
        <Text as="div" size="3" weight="bold" className="mb-4">
    Missing Bank Accounts
    </Text>
    <Text as="div" size="2" weight="regular" className="mb-4">
       List any bank accounts you are not able to connect to Xero.
    </Text>
    <TextArea size="2" placeholder="Lloyds business savings..." ></TextArea>
    <CheckboxCards.Root defaultValue={[]} size="1"onValueChange={(values) =>handleCheckboxChange(values.length)}>
		<CheckboxCards.Item value="2">I confirm I have listed any bankl accounts that could not be connected to Xero.</CheckboxCards.Item>
	</CheckboxCards.Root>
      </TaskSectionContainer>
      </div>)
}
