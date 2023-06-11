import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            // clientId:
            //     "249061083282-6rbd5b8dnjs928rak179u5b7qc6jcrvj.apps.googleusercontent.com",
            // clientSecret: "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",
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    // secret: process.env.NEXTAUTH_SECRET as string,
};

export default NextAuth(authOptions);
