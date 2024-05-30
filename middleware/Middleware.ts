// middleware/auth.ts
import { withAuth } from "next-auth/middleware";
import type { NextRequest, NextResponse } from "next/server";

export const withAdminAuth = withAuth({
  callbacks: {
    authorized: ({ token }) => token?.userRole === "admin",
  },
});

export const withDefaultAuth = withAuth({});
