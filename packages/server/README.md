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
OPENAI_API_KEY=...
DATABASE_URL=mysql://root:123456@localhost:3307/review_summarizer
OLLAMA_HOST=http://127.0.0.1:11434
```

This project was created using `bun init` in bun v1.3.5. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
