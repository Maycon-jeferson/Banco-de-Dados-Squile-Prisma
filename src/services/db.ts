import '@prisma/react-native';
import { PrismaClient } from '@prisma/client/react-native';
import { reactiveHooksExtension } from '@prisma/react-native';

const baseClient = new PrismaClient({
    log: ["query", "info", "warn" ]
});

export const prismaClient = baseClient.$extends(reactiveHooksExtension());

export async function initializedb() {
    try{
        baseClient.$applyPendingMigrations();
    }catch(e){
        console.log("Failed apply migration: ", e)
        throw new Error("Failed initialize db")
    }
}