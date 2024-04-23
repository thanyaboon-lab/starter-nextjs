'use client'

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function Page () {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";
    return (
        <div className="flex flex-col">
            <button onClick={() => signIn('google', {callbackUrl})}>Login with Google</button>
            <button onClick={() => signIn('github', {callbackUrl})}>Login with GitHub</button>
            <button onClick={() => signIn('custom-oauth', {callbackUrl})}>Login with CustomAuth</button>
        </div>
    )
}