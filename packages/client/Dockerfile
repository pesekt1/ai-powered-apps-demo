FROM oven/bun:1.1-alpine

WORKDIR /app

# install deps (cached layer)
COPY package.json ./
COPY bun.lockb* ./
RUN bun install --frozen-lockfile

COPY . .

EXPOSE 5173

CMD ["bun", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
