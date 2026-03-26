import { Cross2Icon } from '@radix-ui/react-icons';
import { Callout, Flex, IconButton } from '@radix-ui/themes';

interface ToastProps {
  type: 'success' | 'error';
  message: string;
  onClose?: () => void;
}

export function Toast({ type, message, onClose }: ToastProps) {
  return (
    <div className="flex h-screen w-full p-4 justify-center items-end">
    <Callout.Root
    highContrast
      color={type === 'success' ? 'green' : 'red'}
      className=" transform -translate-x-1/2 z-[9999] rounded-lg 
        animate-in slide-in-from-bottom-full"
    >
  <Flex direction="row" gap='2' align="center">
      <Callout.Text>
        {message}
      </Callout.Text>
      <IconButton size="2" variant="ghost" onClick={onClose}>
       <Cross2Icon/>
      </IconButton>
      </Flex>
    </Callout.Root>
    </div>
  );
}