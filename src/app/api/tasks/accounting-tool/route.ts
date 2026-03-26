import { supabase } from "@/lib/supabase/client";
import { AccountingToolBodyRequest } from "@/types/tasks.types";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("method reached")
    const body = await req.json();

    const {
        task_id,
        accounting_tool,
        other_tool,
        non_compatible_banks,
    } = body;
    console.log("Data ", body)

    console.log("Data insert:", JSON.stringify(body, null, 2))

    const { data, error } = await supabase
      .from("accounting_tool")
      .insert([
        {
            task_id,
            accounting_tool,
            other_tool,
            non_compatible_banks,
        },
      ])
      .select()
      .single();
console.log("data:" + data)
console.log("error:" + error)
    if (error) {
    
      return NextResponse.json(
        { error: "Failed to create task" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {message: "task created"},
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}