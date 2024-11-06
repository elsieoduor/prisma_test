import { NextRequest, NextResponse } from "next/server";
import prisma from "./lib/db";
import { PrismaClient } from "@prisma/client/extension";

const neon = new Pool({connectionString: process.env.POSTGRES_PRISMA_URL}) 
const adapter = new PrismaNeon(neon)
const prisma = new PrismaClient({adapter})

export async function middleware(request: NextRequest){
  console.log("Middleware running....")
  //e.g authentication
  const user = await prisma.user.findFirst({
    where:{
      email:{contains: "example"}
    }
  })
  console.log('User:', user)

  return NextResponse.next();
}

export const config = {
  matcher: ['/posts']
}