import { supabase } from "@/lib/supabase/client";
import { Tasks } from "@/types/tasks.types";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const today = new Date().toISOString().split("T")[0];

    const { data: overdue, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("status", "pending")
      .lt("due_date", today)
      .limit(100);

    const { data: pendingToday } = await supabase
      .from("tasks")
      .select("*")
      .eq("status", "pending")
      .eq("due_date", today)
      .limit(100);

    const { data: dueSoon } = await supabase
      .from("tasks")
      .select("*")
      .eq("status", "pending")
      .gt("due_date", today)
      .limit(100);

    const { count: totalTasks } = await supabase
      .from("tasks")
      .select("*", { count: "exact", head: true })
      .eq("status", "pending");

    const pendingTasks: Tasks = {
      overdue: overdue || [],
      pendingToday: pendingToday || [],
      dueSoon: dueSoon || [],
    };

    if (error) {
      return NextResponse.json(
        { error: "Failed to fetch tasks" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      tasks: pendingTasks,
      taskCount: totalTasks || 0,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
