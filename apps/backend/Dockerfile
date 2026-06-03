FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY apps/backend/package.json ./apps/backend/
COPY packages/db/package.json ./packages/db/
COPY packages/typescript-config/package.json ./packages/typescript-config/

RUN pnpm install --frozen-lockfile

COPY apps/backend ./apps/backend
COPY packages/db ./packages/db
COPY packages/typescript-config ./packages/typescript-config

WORKDIR /app/apps/backend

RUN pnpm build

EXPOSE 8080

CMD ["node", "dist/index.js"]
