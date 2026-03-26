"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Flex, IconButton, Text } from "@radix-ui/themes";
import { ReactNode } from "react";

interface FullScreenModalProps {
  onClose: () => void;
  title: string;
  children: ReactNode;
  actions?: ReactNode;
}
export function FullScreenModal({
  onClose,
  title,
  children,
  actions,
}: FullScreenModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-5">
      <div className="w-full h-full rounded-xl border border-[var(--novaBlack-7)] flex flex-col overflow-hidden bg-[var(--novaBlack-2)]">
        <div className="border-b border-[var(--novaBlack-5)] min-h-[64px] bg-[var(--novaBlack-1)] p-6 ">
          <Flex gap="3" align="center" direction="row" className="h-full">
            <IconButton
              size="3"
              radius="full"
              variant="soft"
              color="gray"
              onClick={onClose}
            >
              <ArrowLeftIcon width="18" height="18" />
            </IconButton>

            <Text className="text-xl font-medium m-0 text-[var(--novaBlack-12)]">
              {title}
            </Text>
          </Flex>
        </div>
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-6">
          {children}
        </div>
        <div className="flex-shrink-0 border-t border-[var(--novaBlack-5)] min-h-[72px] p-6 bg-white">
          <div className="flex justify-end items-center gap-3">{actions}</div>
        </div>
      </div>
    </div>
  );
}
