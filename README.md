# Build AI-Powered Apps

This repository contains a demo for **Build AI-Powered Apps**:

This demo helps you:

- Understand large language models (LLMs) and how they work
- Work with tokens, context windows, and model settings
- Write effective prompts using proven prompt engineering techniques
- Build a chatbot from scratch with a clean, maintainable architecture
- Create a product review summarizer to help users make faster decisions
- Integrate open-source models from Hugging Face and Ollama
- Run models locally on your own machine
- Apply clean code principles and best practices
- Use modern tools to build full-stack AI-powered applications

# Run the Demo

To run the demo locally, follow these steps:
Start Mysql server docker container:

```bash
docker run -d --name ai-powered-apps-demo-mysql -p 3307:3306 -e MYSQL_ROOT_PASSWORD=123456 -h 127.0.0.1 -v ai_powered_apps_demo_mysql_data:/var/lib/mysql mysql:latest
```

Install dependencies: in the root, client, and server folders, run:

```bash
bun install
```

Start the application:
In the root folder, run:

```bash
bun run dev
```

## Server dependencies

You need .env file in the server folder with the following variables:

```
OPENAI_API_KEY=...
DATABASE_URL=mysql://root:123456@localhost:3307/review_summarizer
```
