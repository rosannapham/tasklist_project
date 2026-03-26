"use client";
import { Box, Button, Card, CheckboxCards, Dialog, Flex, IconButton, Link, Separator, Strong, Table, Text, TextArea, TextField,  } from "@radix-ui/themes";
import { FullScreenModal } from "./ui/FullScreenModal";
import { useRouter } from "next/navigation";
import { AccountingToolOptions, useAccountingToolInviteTask } from "@/hooks/useAccountingToolInviteTask";
import { TaskSectionContainer } from "./ui/TaskSectionContainer";
import { CopyIcon } from "@radix-ui/react-icons";

interface PageContentProps {
    handleCheckboxChange: (value: number) => void
}

interface OtherContentProps {
 accountingValueInput: string;
  handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;

}

function XeroOptionContentPage1({handleCheckboxChange}: PageContentProps) {
 
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
function XeroOptionContentPage2({handleCheckboxChange}: PageContentProps) {
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


function QuickBooksOptionContentPage1({handleCheckboxChange}: PageContentProps) {
    return(
        <TaskSectionContainer>      
        <Text as="div" size="3" weight="bold">
    Invite Novabook to Xero
  </Text>
  <Text as="div" size="2" weight="regular">
       1. On Quickbooks, click the Settings icon (top right), then select "Manage Users".
      </Text>

    <Text as="div" size="2" weight="regular">
       2. Switch to the "Accounting Firms" tab, then invite a new user using the details below.
      </Text>
      <Card>
      <Flex direction="column" gap="3">
			<label>
				<Text as="div" size="2" mb="1" weight="bold">
					Email address
				</Text>
				<TextField.Root
                radius="full"
				defaultValue= "books@novabook.com"
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
    </Card>
    <CheckboxCards.Root defaultValue={[]} size="1"onValueChange={(values) =>handleCheckboxChange(values.length)}>
		<CheckboxCards.Item value="2">I confirm I have invited Novabook.</CheckboxCards.Item>
	</CheckboxCards.Root>
      </TaskSectionContainer>
    )
}
function QuickBooksOptionContentPage2({handleCheckboxChange}: PageContentProps ) {
    return (<TaskSectionContainer>      
        <Text as="div" size="3" weight="bold">
    Missing Bank Accounts
    </Text>
    <Text as="div" size="2" weight="regular" className="mb-4">
       List any bank accounts you are not able to connect to Quickbooks.
    </Text>
    <TextArea size="2" placeholder="Lloyds business savings..." ></TextArea>
    <CheckboxCards.Root defaultValue={[]} size="1" onValueChange={(values) => handleCheckboxChange(values.length)}>
		<CheckboxCards.Item value="2">I confirm I have listed any bank accounts that could not be connected to Quickbooks.</CheckboxCards.Item>
	</CheckboxCards.Root>
      </TaskSectionContainer>)
}

function OtherOptionContent({handleTextChange,accountingValueInput }: OtherContentProps) {
    return (<TaskSectionContainer>      
        <Text as="div" size="3">
        What accounting tool does your company use?
    </Text>
    <TextArea size="2" placeholder="Lloyds business savings..." value={accountingValueInput} onChange={(e) => handleTextChange(e)}></TextArea>
    </TaskSectionContainer>)
}
function NoAccountingToolOptionContent({handleCheckboxChange}: PageContentProps) {
    return(
        <TaskSectionContainer>      
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
    <CheckboxCards.Root defaultValue={[]} size="1" onValueChange={(values) =>handleCheckboxChange(values.length)}>
		<CheckboxCards.Item value="1" >I confirm I have created a Xero account.</CheckboxCards.Item>
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
    <CheckboxCards.Root defaultValue={[]} size="1"onValueChange={(values) =>handleCheckboxChange(values.length)}>
		<CheckboxCards.Item value="2">I confirm I have added my Company Registration Number on Xero.</CheckboxCards.Item>
	</CheckboxCards.Root>
      </TaskSectionContainer>
    )
}
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
        isPageValid, 
        checkboxCount,
        handleTextChange,
        otherAccountingToolinput } = useAccountingToolInviteTask();

        


        return (
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
          )
        }