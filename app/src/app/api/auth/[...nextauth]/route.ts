import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

const scopes = ["identify", "email"];

const handler = NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID || "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
      authorization: { params: { scope: scopes.join(" ") } },
    }),
  ],
  pages: {
    signIn: "/",
    signOut: "/auth/signout",
    error: "/auth/error",
    newUser: "/dashboard",
  },
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
