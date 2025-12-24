FROM oven/bun:1.2-alpine

WORKDIR /app

# Prisma on Alpine commonly needs OpenSSL at runtime/build time
RUN apk add --no-cache openssl

# install deps (cached layer) - context is ./packages/server
COPY package.json ./
COPY prisma ./prisma

# No root bun.lock available in this build context; do a normal install for dev images
RUN bun install

EXPOSE 3000

CMD ["bun", "run", "dev"]
