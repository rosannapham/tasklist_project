"use client";
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { Flex, IconButton, } from '@radix-ui/themes';
import { ReactNode } from 'react';

interface FullScreenModalProps {
onClose: () => void
title: string,
children: ReactNode,
actions?: ReactNode,
}
export function FullScreenModal ({
  onClose,
  title,
  children,
  actions,
}: FullScreenModalProps ) {

  return (
<Dialog.Root open={true} >
  <Dialog.Portal>
    <Dialog.Overlay/>

    <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-5">
      
      <div className="w-full h-full rounded-xl border border-gray-300  flex flex-col overflow-hidden bg-gray-100">
        <div className="border-b border-gray-200 min-h-[64px] bg-white p-6 ">
     
        <Flex gap="3" align="center" direction="row" className='h-full' >
        <IconButton size="3" radius="full" variant="soft" color='gray' onClick={onClose}>
		<ArrowLeftIcon width="18" height="18" />
	    </IconButton>
        
            <Dialog.Title
              className="text-xl font-semibold m-0 text-gray-900"
            >
              {title}
            </Dialog.Title>
        </Flex>
        </div>
        <div
          className="flex-1 overflow-y-auto overflow-x-hidden p-6"
        >
          {children}
        </div>
        <div className="flex-shrink-0 border-t border-gray-200 min-h-[72px] p-6 bg-white">
          <div
            className="flex justify-end items-center gap-3"
          >
            {actions}
          </div>
        </div>
      </div>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
  );
};
