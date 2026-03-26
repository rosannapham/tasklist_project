import { Cross2Icon } from '@radix-ui/react-icons';
import { Badge, Callout, Flex, IconButton } from '@radix-ui/themes';

interface ToastProps {
  type: 'success' | 'error';
  message: string;
  onClose?: () => void;
}

export function Toast({ type, message, onClose }: ToastProps) {
  return (
    <div className="flex h-screen w-full p-4 justify-center items-end bg-red-500">
    <div className=" transform -translate-x-1/2 z-[9999] rounded-full 
        animate-in slide-in-from-bottom-full bg-red-500">
    <Badge 
    highContrast
    size="3"
    radius='full'
      
    >
  <Flex direction="row" gap='2' align="center">
      <Callout.Text>
        {message}
      </Callout.Text>
      <IconButton size="2" variant="ghost" onClick={onClose}>
       <Cross2Icon/>
      </IconButton>
      </Flex>
      </Badge>
    </div>
    </div>
  );
}