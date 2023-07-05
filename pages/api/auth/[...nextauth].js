import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../server/lib/mongodb"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jet"
  },
  jwt: {
    secret:process.env.SECRET_JWT,
  },
  callbacks: {
    async session({ session, token, user }) {
      // session.user.id = token.id
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log({jwtUser : user});
      // if(user) {
      // token.id = user.id
      // }
      return token;
    }
  }
}
export default NextAuth(authOptions)