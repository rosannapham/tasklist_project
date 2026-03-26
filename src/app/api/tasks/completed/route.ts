import { supabase } from "@/lib/supabase/client";
import { TaskApi, Tasks } from "@/types/tasks.types";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data: completedTasks, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("status", "completed")
      .order("created_at", { ascending: false })
      .limit(100);

    if (error) {
      return NextResponse.json(
        { error: "Failed to fetch tasks" },
        { status: 500 },
      );
    }
    const tasks: Tasks = {
      completed: completedTasks || [],
    };

    return NextResponse.json({
      tasks: tasks,
      taskCount: completedTasks?.length || 0,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
