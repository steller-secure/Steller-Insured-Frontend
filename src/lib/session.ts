import "server-only"
import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const key = process.env.JWT_SECRET || "secret"

const _cookie = {
    name: "session",
    duration: 24 * 60 * 60 * 1000,
    options: { httpsOnly: true, secure: true, sameSite: "lax" as const, path: "/" }
}

export async function encrypt(payload: JWTPayload | undefined) {
    const jwt = new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("1day")
        .sign(new TextEncoder().encode(key));

    return jwt
}
export async function decrypt(session: string | Uint8Array | undefined) {
    try {
        if (!session || typeof session !== 'string') {
            throw new Error('Invalid session token');
          }

        const { payload } = await jwtVerify(session, new TextEncoder().encode(key),
            {
                algorithms: ["HS256"]
            });

        return payload
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function createSession(userId: string) {
    const expires = new Date(Date.now() + _cookie.duration)
    const session = await encrypt({ userId, expires });

    (await cookies()).set(_cookie.name, session as string, {..._cookie.options, expires})

    redirect("/dashboard")
    
}
export async function verifySession() {
    const cookie =  (await cookies()).get(_cookie.name)?.value;
    const session = await decrypt(cookie)
    
    if(!session?.userId) {
        redirect("/sign-in")
    }
    
    return {userId: session.userId}
}
export async function deleteSession() {
    (await cookies()).delete(_cookie.name);
    redirect("/sign-in")
}


