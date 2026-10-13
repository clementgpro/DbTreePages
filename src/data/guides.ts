export interface GuideSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  code?: string;
  image?: { src: string; alt: string };
}

export interface Guide {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  sections: GuideSection[];
  faq?: { question: string; answer: string }[];
  datePublished: string;
}

export const guides: Guide[] = [
  {
    slug: "postgresql-foreign-key-explorer",
    metaTitle: "How to Explore Foreign Key Relationships in PostgreSQL - DbTree",
    metaDescription:
      "Three ways to explore foreign key relationships in PostgreSQL: psql, catalog queries and a visual tree explorer. Find parent and child records without writing JOINs.",
    title: "How to explore foreign key relationships in PostgreSQL",
    intro:
      "You have a row in front of you and you need to know everything connected to it: its parents, its children, and their children. PostgreSQL stores every foreign key in its system catalog, so the information is there. The question is how fast you can get to it. Here are three approaches, from the most manual to the most visual.",
    datePublished: "2026-10-13",
    sections: [
      {
        heading: "1. Inspect a table with psql",
        paragraphs: [
          "The quickest way to see the foreign keys of a single table is the \\d meta-command in psql. It lists outgoing constraints (\"Foreign-key constraints\") and incoming ones (\"Referenced by\").",
        ],
        code: "\\d orders",
      },
      {
        heading: "2. Query the system catalog",
        paragraphs: [
          "To list every foreign key in a schema, query pg_constraint. This gives you the full relationship map: which table and column points to which.",
        ],
        code: `SELECT
  conrelid::regclass  AS child_table,
  confrelid::regclass AS parent_table,
  pg_get_constraintdef(oid) AS definition
FROM pg_constraint
WHERE contype = 'f'
  AND connamespace = 'public'::regnamespace
ORDER BY child_table;`,
      },
      {
        heading: "Find the records linked to one row",
        paragraphs: [
          "Knowing the schema is only half the job. To see the actual data, you still write one query per relationship, and one more each time you go a level deeper:",
        ],
        code: `SELECT * FROM customers WHERE id = 42;
SELECT * FROM orders WHERE customer_id = 42;
SELECT * FROM order_items WHERE order_id IN (
  SELECT id FROM orders WHERE customer_id = 42
);`,
        bullets: [
          "Each level of depth means a new query or a new JOIN.",
          "Incoming relationships (who references this row?) are easy to forget.",
          "Results come back as flat tables, so the hierarchy lives in your head.",
        ],
      },
      {
        heading: "3. Browse relationships as a tree",
        paragraphs: [
          "DbTree reads the same foreign key metadata and turns it into a tree you can click through. Pick a table, optionally an ID, and expand: parent records, child records and their own relations load on demand. The selected record's fields appear on the right.",
          "There is no SQL to write, and the connection is read-only, so you can explore a production database without risk of modifying it.",
        ],
        image: { src: "/apres-dbtree.jpg", alt: "DbTree showing a company record expanded into departments and teams" },
      },
      {
        heading: "Which approach should you use?",
        bullets: [
          "psql \\d: you need the constraints of one table, right now.",
          "pg_constraint: you want a full map of the schema, for documentation or a script.",
          "DbTree: you are investigating data, following one record through several levels of relationships.",
        ],
      },
    ],
    faq: [
      {
        question: "How do I see which tables reference a table in PostgreSQL?",
        answer:
          "Run \\d table_name in psql and read the \"Referenced by\" section, or query pg_constraint with confrelid = 'table_name'::regclass and contype = 'f'.",
      },
      {
        question: "Does DbTree modify my PostgreSQL database?",
        answer:
          "No. DbTree connects in read-only mode and never writes to your database. Connection credentials stay on your machine.",
      },
    ],
  },
  {
    slug: "dbeaver-alternative",
    metaTitle: "DbTree vs DBeaver: Explore Related Records Without JOINs",
    metaDescription:
      "Looking for a DBeaver alternative to browse PostgreSQL data through its relationships? Compare DbTree and DBeaver, and see when a tree explorer is the better fit.",
    title: "DbTree vs DBeaver: which one to explore related data?",
    intro:
      "DBeaver is one of the most popular database tools, and for good reason. But it is built around writing SQL and reading tables. If what you need is to follow a record through its relationships, a different kind of tool can save you a lot of clicks. This page explains the difference honestly, so you can pick the right tool for the job.",
    datePublished: "2026-10-13",
    sections: [
      {
        heading: "What DBeaver is great at",
        bullets: [
          "Writing and running SQL with autocompletion.",
          "Supporting dozens of databases, not only PostgreSQL.",
          "Editing data, managing schemas, importing and exporting.",
          "ER diagrams of your schema.",
        ],
        paragraphs: [
          "If you spend your day writing queries or administering databases, DBeaver (or a similar SQL client) remains the right choice.",
        ],
      },
      {
        heading: "Where a SQL client gets in the way",
        paragraphs: [
          "Debugging a support ticket or understanding unfamiliar data usually looks like this: find a customer, open their orders, open the items of one order, check the related invoice, go back up. In a SQL client, every step is a new query or a new tab, and the results are flat tables that lose the hierarchy.",
        ],
      },
      {
        heading: "What DbTree does differently",
        paragraphs: [
          "DbTree is not a SQL IDE. It does one thing: show your PostgreSQL data as a tree that follows foreign keys in both directions. You select a record and expand it to see its parents and children, level after level, with no query to write.",
        ],
        image: { src: "/apres-dbtree.jpg", alt: "DbTree tree view of related records" },
      },
      {
        heading: "Side-by-side comparison",
        bullets: [
          "Main goal: DBeaver runs SQL and manages databases. DbTree explores data through relationships.",
          "Navigation: DBeaver shows tables of results. DbTree shows an interactive tree.",
          "Relationships: in DBeaver you follow them query by query. DbTree expands them automatically, incoming and outgoing.",
          "SQL required: yes for DBeaver, none for DbTree.",
          "Databases: DBeaver supports many. DbTree supports PostgreSQL 9.6+ today.",
          "Platform: DBeaver runs on Windows, macOS and Linux. DbTree runs on Windows for now.",
          "Price: DBeaver Community is free. DbTree is free up to 2 levels, then €29 one-time.",
        ],
      },
      {
        heading: "Use both",
        paragraphs: [
          "DbTree is designed to sit next to your SQL client, not to replace it. Use it for the moments where you need to understand how records connect, then you go back to SQL when you need to write or change something.",
        ],
      },
    ],
    faq: [
      {
        question: "Is DbTree a replacement for DBeaver?",
        answer:
          "Not entirely. DbTree focuses on exploring data through relationships and does not write or edit data. Many people use it alongside DBeaver.",
      },
      {
        question: "Does DbTree work with MySQL or SQL Server?",
        answer:
          "Not yet. DbTree currently supports PostgreSQL 9.6 and above, including Amazon RDS, Supabase, Neon and Railway. Other databases are on the roadmap.",
      },
    ],
  },
  {
    slug: "supabase-database-explorer",
    metaTitle: "Explore Your Supabase Database as a Tree - DbTree",
    metaDescription:
      "Browse your Supabase Postgres data through its foreign keys. Connect DbTree to Supabase in two minutes and expand related records as a tree, read-only.",
    title: "Explore your Supabase database as a tree",
    intro:
      "Supabase runs on PostgreSQL, so every foreign key you define is a relationship DbTree can follow. Connect once with your database credentials, pick a table, and click through users, their records and everything linked to them.",
    datePublished: "2026-10-13",
    sections: [
      {
        heading: "Why use a tree explorer with Supabase",
        bullets: [
          "See a user and everything that belongs to them in one view.",
          "Follow relationships several levels deep without writing JOINs.",
          "Read-only connection: no risk of editing production data by mistake.",
        ],
      },
      {
        heading: "Get your connection details",
        paragraphs: [
          "In your Supabase dashboard, open the Connect panel of your project. It shows the host, port, database name and user of your Postgres database. Use the direct connection or the session pooler; both work with a standard PostgreSQL client.",
        ],
      },
      {
        heading: "Optional: create a read-only role",
        paragraphs: [
          "DbTree never writes to your database, but a dedicated read-only role is good practice for any exploration tool:",
        ],
        code: `CREATE ROLE dbtree_reader WITH LOGIN PASSWORD 'choose-a-strong-password';
GRANT USAGE ON SCHEMA public TO dbtree_reader;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO dbtree_reader;`,
      },
      {
        heading: "Connect and explore",
        paragraphs: [
          "Open DbTree, create a new connection with those details, then pick a table such as profiles or orders. Enter an ID to start from a specific record, or leave it empty to list the first rows. Expand any node to load the related records.",
        ],
        image: { src: "/apres-dbtree.jpg", alt: "Related records expanded as a tree in DbTree" },
      },
    ],
    faq: [
      {
        question: "Does DbTree work with Neon, Railway or Amazon RDS too?",
        answer:
          "Yes. Any PostgreSQL 9.6+ database reachable from your machine works, including Neon, Railway and Amazon RDS.",
      },
      {
        question: "Are my Supabase credentials sent anywhere?",
        answer:
          "No. Credentials are stored locally on your machine and DbTree connects directly to your database.",
      },
    ],
  },
];
