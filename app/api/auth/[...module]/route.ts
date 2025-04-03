import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "sajid" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        // db request
        const user = {
          name: "sajid",
          id: 1,
          username: "sajid@gmail.com",
        };
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});
