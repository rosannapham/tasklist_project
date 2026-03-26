
## Getting Started 🚀

1. Install the dependencies:

```bash
npm install
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

2. Connect with supabase

Create a supabase database following the docs in 
[docs](https://supabase.com/docs/guides/getting-started/quickstarts/nuxtjs)

Make sure to save connection variables in a .env.local

Table schema in supabase:

Task :
```
create table public.tasks (
  id uuid not null default gen_random_uuid (),
  status character varying not null default 'pending'::character varying,
  created_at timestamp with time zone not null default now(),
  slug character varying not null,
  category character varying not null,
  due_date date not null,
  completed_at timestamp with time zone null,
  completed_by character varying null,
  task_name text not null,
  constraint tasks_pkey primary key (id)
) TABLESPACE pg_default;
```

Accounting tool
```
create table public.accounting_tool (
  task_id uuid null,
  created_at timestamp with time zone not null default now(),
  accounting_tool character varying null,
  other_tool character varying null,
  non_compatible_banks text null,
  id uuid not null default gen_random_uuid (),
  constraint accounting_tool_pkey primary key (id),
  constraint accounting_tool_task_id_fkey foreign KEY (task_id) references tasks (id)
) TABLESPACE pg_default;
```
 
Add RLS policies to each table to allow user to read, insert and post to the table. An Example is shown in the starter docs


3. Run the development server:

```bash
npm run dev
```
---

## Decision Reasoning 

### Choosing database

Choice: Supabase 

I chose Supabase primarily for the quick and straightforward set up to allow me to focus more time on development
Additionally, the requirement of the task did not require complex queries or highly relational data structures therefore Supabase provided the necessary functions to carry out the assignment.


### How to display task name

Options

- using the slug from the backend and having a map in the front end to display

One option was to use the task slug returned from the backend and map it to a display name on the frontend. However, this approach does not scale well. Each time a new task is introduced, the frontend codebase would need to be updated to include the new mapping. This creates unnecessary maintenance overhead and tight coupling between the frontend and backend.

- having a name column 

Another option was to include a name column in the tasks table. While this simplifies rendering on the frontend, it introduces the risk of inconsistencies and typos, especially if similar tasks are created repeatedly across different users.
Decided to have a column name when saving a task to the database.

Choice: having a column name 
The chosen approach was to include a name column for simplicity in the current implementation. 
However, a more scalable long-term solution would be to introduce a separate table that maps task slugs to task names for centralised management of task definitions and allows the ability to add new task types via an endpoint.


