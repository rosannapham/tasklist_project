"use client";
import { Box, Button, Dialog, Flex, Table,  } from "@radix-ui/themes";
import { FullScreenModal } from "./ui/FullScreenModal";

export function AccountingToolInviteContent() {

    return (<FullScreenModal onClose={() => console.log("hi")} title={"title"}><div>hi</div></FullScreenModal>
    )
  }