import { supabase } from "@/lib/supabase/client";
import { AccountingToolBodyRequest } from "@/types/tasks.types";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { task_id, accounting_tool, other_tool, non_compatible_banks } = body;

    const { data, error } = await supabase
      .from("accounting_tool")
      .insert({
        task_id: task_id,
        accounting_tool: accounting_tool,
        other_tool: other_tool,
        non_compatible_banks: non_compatible_banks,
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: "Failed to post task" },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: "task created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
