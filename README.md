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

Data

```
id	status	created_at	slug	category	due_date	completed_at	completed_by	task_name
0060adf5-2192-4e56-993e-ea0bf8ee3aae	completed	2026-03-25 16:38:56+00	setup-direct-debit	Onboarding	25/03/2026	2026-03-25 16:39:58+00	Me	Set up direct debit
03d05776-808f-4685-961b-cf0c4acede67	pending	2026-03-26 21:45:15.318684+00	pension-scheme-setup	Payroll	30/04/2026			Pension scheme setup
4139a5ae-e8d6-4ff7-a0dc-5a1b57176abd	pending	2026-03-22 18:56:08.137591+00	accounting-tool-invite	Connections	20/03/2026			Invite Novabook to your accounting tool
6064e6b2-b891-470a-b825-a2ce74c7bcbe	pending	2026-03-22 18:54:52.448221+00	add-payroll-schedule	Payroll	21/03/2026			Add payroll schedule
c1b88c4e-24e6-42e0-a874-5c6ca36cd474	pending	2026-03-26 21:49:22.158581+00	previous-accountant-info	Onboarding	26/03/2026			Tell us about your previous accountant
e0487c13-a07e-4702-aff7-a4436c8573fb	pending	2026-03-24 15:20:50+00	vat-setup	VAT Return	23/04/2026			VAT setup
```

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

### Fetching pending/completed

Options

- Two separate hooks (Pending & Completed)
  Each hook fetches its own data independently.
  More resilient: if one request fails, the other tab can still display data.
  Better separation of concerns.

- Single hook for the Tasks page
  Centralised data fetching.
  Less state to manage.
  Simpler implementation.
  But task list can't function indepedently, if one fails, both pages display fail

choice: Having on use hook.
If I had used separate hooks for the “Pending” and “Completed” tabs, each hook would likely trigger a new fetch whenever the user switches tabs. This could lead to unnecessary network requests and a less efficient user experience.
By using a single hook, the data is fetched once and shared across both tabs, avoiding redundant calls and improving performance but i had individual states managing loading and errors for seperation of concerns and retries will only fetch the individual task list if fails.
In the future, this could be further improved by introducing React Query to handle caching and automatically refresh stale data.

