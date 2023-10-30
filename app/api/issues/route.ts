import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

//data validation for sending request
const createIssueSchema = z.object({
  title: z.string().min(3).max(255),
  description: z.string().min(10),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  //parse the request body so that check the data is valid or not for schema
  const validation = createIssueSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 404 });
  }
  // otherwise
  //create newIssue in the prisma.modelName.create

  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });
  return NextResponse.json(newIssue, { status: 201 });
}
