import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decrypt } from "@/src/lib/session";

export default async function middleware(request: NextRequest) {
    const protectedRoutes = ["/dashboard"]
    const publicRoutes = ['/sign-in', '/sign-up', '/']

    const currentPath = request.nextUrl.pathname;
     // uncoment this session and remove this line after sign-up and sign-in logic is implemented
    // const isProtectedRoute = protectedRoutes.includes(currentPath);
    const isPublicRoute = publicRoutes.includes(currentPath)

    // On /dashboard access without auth, redirect to /sign-in
    
    // uncoment this session after sign-up and sign-in logic is implemented
    // if (isProtectedRoute) {
    //     const cookie = (await cookies()).get("session")?.value;
    //     const session = await decrypt(cookie)

    //     if (!session?.userId) {
    //         return NextResponse.redirect(new URL("/sign-in", request.url));
    //     }
    // }

    // On login/signup success (if user is authenticated), redirect to /dashboard
    if(isPublicRoute) {
        const cookie = (await cookies()).get("session")?.value;
        const session = await decrypt(cookie)

        if (session?.userId) {
            return NextResponse.redirect(new URL("/dashboard", request.url));
        }
    }
    
    
    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}