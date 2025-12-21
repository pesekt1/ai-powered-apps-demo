# server

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

If prisma client is not found, run:

```bash
bunx prisma generate
```

Add the .env:

```env
OPENAI_API_KEY=your_openai_api_key
DATABASE_URL=your_database_url
```

This project was created using `bun init` in bun v1.3.5. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
