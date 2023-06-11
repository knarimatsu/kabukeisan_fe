import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId:
                "269946283050-9j09u2vopedd5uof6c0kukd38duqjbop.apps.googleusercontent.com",
            // clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: "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",
            // clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    secret: "EUQdZIj6UzmTk7qZiGWtlM7zRFZTxbl6c69qeBG6D3A=",
};

export default NextAuth(authOptions);
