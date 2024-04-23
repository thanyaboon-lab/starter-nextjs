import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./prisma";
import { compare } from "bcryptjs";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
        // CredentialsProvider({
        //     name: "Sign in",
        //     id: "credentials",
        //     credentials: {
        //         email: {
        //             label: "Email",
        //             type: "email",
        //             placeholder: "example@example.com",
        //         },
        //         password: { label: "Password", type: "password" },
        //     },
        //     async authorize(credentials) {
        //         console.log('🚀 ~ credentials:', credentials)
        //         if (!credentials?.email || !credentials.password) {
        //             return null;
        //         }

        //         const user = await prisma.user.findUnique({
        //             where: {
        //                 email: credentials.email,
        //             },
        //         });
        //         console.log('🚀 ~ user:', user)

        //         if (!user || !(await compare(credentials.password, user.password!))) {
        //             return null;
        //         }

        //         return {
        //             id: user.id,
        //             email: user.email,
        //             name: user.name,
        //             randomKey: "Hey cool",
        //         };
        //     },
        // }),
        {
            id: "custom-oauth",
            name: "custom-oauth",
            type: "oauth",
            clientId: process.env.OIDC_CLIENT_ID as string,
            clientSecret: process.env.OIDC_CLIENT_SECRET as string,
            wellKnown: "http://localhost:3000/.well-known/openid-configuration",
            authorization: { params: { scope: "openid profile offline_access" } },
            idToken: true,
            checks: ["pkce", "state"],
            profile(profile) {
              return {
                id: profile.sub,
                name: profile.name,
                email: profile.email,
                image: profile.picture,
              }
            },
          }
    ],
    callbacks: {
        session: ({ session, token }) => {
            console.log('🚀 ~ session, token:', session, token)
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    randomKey: token.randomKey,
                },
            };
        },
        jwt: ({ token, user }) => {
            console.log('🚀 ~ token, user:', token, user)
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,
                    randomKey: u.randomKey,
                };
            }
            return token;
        },
    },
    secret: process.env.NEXTAUTH_SECRET
}