
import { supabase } from "@/lib/supabase/client";
import { NextRequest, NextResponse } from "next/server";

type RouteParams = {
    params: Promise<{slug: string;}>
}

export async function GET(
    req: NextRequest,
    { params }: RouteParams
  ): Promise<NextResponse> {
    try {
    
      const { slug } = await params;
  
      if (!slug || typeof slug !== 'string' || slug.trim() === '') {
        return NextResponse.json(
          { message: 'Invalid or missing slug parameter' },
          { status: 400 }
        );
      }
  
      const sanitizedSlug = slug.trim().toLowerCase();
  
      const { data: task, error } = await supabase
      .from('tasks')
        .select('*')
        .eq('slug', sanitizedSlug)
        .single()
  
      if (!task) {
        return NextResponse.json(
          { message: `Event with slug '${sanitizedSlug}' not found` },
          { status: 404 }
        );
      }
  

      return NextResponse.json( task );
    } catch (error) {
  
      if (error instanceof Error) {

        return NextResponse.json(
          { message: 'Failed to fetch events', error: error.message },
          { status: 500 }
        );
      }
  
      return NextResponse.json(
        { message: 'An unexpected error occurred' },
        { status: 500 }
      );
    }
}
export async function PATCH(req: NextRequest, { params }: RouteParams) {
    try {
    const body = await req.json()
    const {slug} = await params

    if (!slug || typeof slug !== 'string' || slug.trim() === '') {
        return NextResponse.json(
          { message: 'Invalid or missing slug parameter' },
          { status: 400 }
        );
      }

    const sanitizedSlug = slug.trim().toLowerCase();

    const {
        status,
        completed_by
    } = body;

    const now = new Date().toISOString()
  
    const { data: task, error } = await supabase
      .from("tasks")
      .update({
        status: status,
        completed_at: now,
        completed_by: completed_by
      })
      .eq('slug', sanitizedSlug)
        .select()
        .single()

        if (error) {
    
            return NextResponse.json(
              { error: error },
              { status: 500 }
            );
          }
      
        return NextResponse.json(task);

    } catch (error) {
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }  

}