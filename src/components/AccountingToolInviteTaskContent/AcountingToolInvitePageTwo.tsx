import { Page2Props } from "@/types/tasks.types";
import EmptyContent from "./EmptyContent";
import { QuickBooksOptionContentPage2 } from "./Quickbook";
import { XeroOptionContentPage2 } from "./Xero";

const getOptionContentPage2 = (
    selectedId: number | null,
    onCheckboxChange: (value: number) => void,
  ) => {
    if (!selectedId) return <EmptyContent />;
  
    switch (selectedId) {
      case 1:
        return <XeroOptionContentPage2 handleCheckboxChange={onCheckboxChange} />;
      case 2:
        return (
          <QuickBooksOptionContentPage2 handleCheckboxChange={onCheckboxChange} />
        );
      default:
        return <EmptyContent />;
    }
  };
  
  
  
  export default function Page2({ selectedId, handleCheckboxChange }: Page2Props) {
    return <>{getOptionContentPage2(selectedId, handleCheckboxChange)}</>;
  }