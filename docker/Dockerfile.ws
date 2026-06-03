FROM node:20-alpine

  RUN npm install -g pnpm

  WORKDIR /app

  COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
  COPY apps/ws/package.json ./apps/ws/
  COPY packages/db/package.json ./packages/db/
  COPY packages/typescript-config/package.json ./packages/typescript-config/

  RUN pnpm install --frozen-lockfile

  COPY apps/ws ./apps/ws
  COPY packages/db ./packages/db
  COPY packages/typescript-config ./packages/typescript-config

  WORKDIR /app/apps/ws

  RUN pnpm build

  EXPOSE 8081

  CMD ["node", "dist/index.js"]

 