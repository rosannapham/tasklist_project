import { supabase } from "@/lib/supabase/client";
import { Tasks } from "@/types/tasks.types";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const today = new Date().toISOString().split("T")[0];

    const { data: overdue } = await supabase
      .from("tasks")
      .select("*")
      .lt("due_date", today);

    const { data: pendingToday } = await supabase
      .from("tasks")
      .select("*")
      .eq("due_date", today);

    const { data: dueSoon } = await supabase
      .from("tasks")
      .select("*")
      .gt("due_date", today);

    const { count: totalTasks } = await supabase
      .from("tasks")
      .select("*", { count: "exact", head: true });

    const pendingTasks: Tasks = {
      overdue: overdue || [],
      pendingSoon: pendingToday || [],
      dueSoon: dueSoon || [],
    };

    return NextResponse.json({
      tasks: pendingTasks,
      taskCount: totalTasks || 0,
    });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
