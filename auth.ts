import NextAuth from "next-auth";
import Cognito from "next-auth/providers/cognito";
import Github from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [Cognito, Github],
});
