// import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";
// import { MongoDBAdapter } from "@auth/mongodb-adapter"
// import clientPromise from "@/server/lib/mongodb"

// export default NextAuth({
//   Configure one or more authentication providers
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//     ...add more providers here
//   ],
//   session: {
//     strategy: "jwt"
//   },
//   jwt: {
//     secret: process.env.SECRET_JWT,
//   },
//   secret: process.env.NEXTAUTH_URL,
//   adapter: MongoDBAdapter(clientPromise),
//   callbacks: {
//     async session({ session, token }) {
//       session.user.id = token.id;
//       session.accessToken = token.accessToken;
//       return session;
//     },
//     async jwt({ token, user, account }) {
//       if (user) {
//         token.id = user.id;
//       }
//       if (account) {
//         token.accessToken = account.access_token;
//       }
//       return token;
//     },
//   },

// });

import NextAuth from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "@/lib/mongodb"

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id;
      session.accessToken = token.accessToken;
      return session;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },

});