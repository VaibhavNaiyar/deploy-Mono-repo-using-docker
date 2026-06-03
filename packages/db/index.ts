import { PrismaClient } from "./generated/prisma/client.js";

// 1. Declare the global variable to hold the Prisma instance
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// 2. Create the instance OR reuse the existing one (Notice the {} added here!)
export const prisma = globalForPrisma.prisma ?? new PrismaClient({});

// 3. If we are not in production, save the instance to the global variable
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

// 4. Export the types
export * from "./generated/prisma/client.js";