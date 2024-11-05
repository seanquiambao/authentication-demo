import googleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

export const options: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    googleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
    }),
    // ...add more providers here
  ],
};
