import { Cross2Icon } from '@radix-ui/react-icons';
import { Badge, Callout, Flex, IconButton, Text } from '@radix-ui/themes';
import { CheckCircleIcon } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose?: () => void;
}
export function SuccessToast({ message }: ToastProps) {
    return (
      <div
        className="
          fixed bottom-4 left-1/2 transform -translate-x-1/2 
          z-[9999] 
          bg-black px-4 py-3 rounded-full
          animate-in slide-in-from-bottom-2 duration-300 "
      >
        <div className="flex items-center justify-between gap-3">
        <CheckCircleIcon  color='white'/>
          <span className="text-sm font-medium text-white ">
            {message}
          </span>
        </div>
      </div>
    );
  }

  export function ErrorToast({ message, onClose }: ToastProps) {
    return (
      <div
        className="
          fixed bottom-4 left-1/2 transform -translate-x-1/2 
          z-[9999] 
          bg-red-500 px-4 py-3 rounded-full
          animate-in slide-in-from-bottom-2 border border-black "
      >
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-medium text-white ">
            {message}
          </span>
          { onClose && 
          (<IconButton color="red" variant="solid" highContrast radius='full' onClick={onClose}>
			<Cross2Icon  />
		    </IconButton>
            )}

        </div>
      </div>
    );
  }