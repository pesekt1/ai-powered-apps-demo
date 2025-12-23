FROM oven/bun:1.1-alpine

WORKDIR /app

# Prisma on Alpine commonly needs OpenSSL at runtime/build time
RUN apk add --no-cache openssl

# install deps (cached layer)
COPY package.json ./
COPY bun.lockb* ./

# Ensure Prisma schema exists before postinstall runs (prisma generate)
COPY prisma ./prisma

RUN bun install --frozen-lockfile

# keep for non-bind-mount usage; bind mount will override at runtime
COPY . .

EXPOSE 3000

CMD ["bun", "run", "dev"]
