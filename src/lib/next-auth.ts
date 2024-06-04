import { Roles } from "@prisma/client";
import { type DefaultSession, AuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { findUser, createUser, updateUser } from "@/utils/database/user.query";
import { compareHash } from "@/utils/encryption";

import prisma from "./prisma";

import type { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id: string;
      role: Roles;
      name: string;
      user_pic: string;
      email: string;
      someExoticUserProperty?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends DefaultJWT {
    id: string;
    role: Roles;
    name: string;
    user_pic: string;
    email: string;
  }
}

export const authOptions: AuthOptions = {
  theme: {
    colorScheme: "light",
    brandColor: "#E04E4E",
    logo: "/horizontal.svg",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "user@student.smktelkom-mlg.sch.id",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials) {
        try {
          const findUser = await prisma.user.findUnique({
            where: { email: credentials?.email },
            include: { userAuth: true },
          });
          if (!findUser) return null;

          const comparePassword = compareHash(
            credentials?.password as string,
            findUser.userAuth?.password as string,
          );

          if (!comparePassword) return null;

          const user = {
            id: findUser.id,
            role: findUser.role,
            name: findUser.name,
            email: findUser.email,
            user_pic: findUser.user_pic,
          };
          return user;
        } catch (e) {
          console.error(e);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: false,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      const redirectUrl = url.startsWith("/")
        ? new URL(url, baseUrl).toString()
        : url;
      return redirectUrl;
    },
    async signIn({ user, profile, account }) {
      if (
        account?.provider == "google" &&
        !profile?.email?.endsWith("smktelkom-mlg.sch.id")
      )
        return false;
      if (user.email) {
        const userdb = await findUser({ email: user.email });
        if (!userdb) {
          await createUser({
            email: user.email,
            name: user.name || "",
            user_pic:
              user.image ||
              "https://res.cloudinary.com/mokletorg/image/upload/f_auto,q_auto/user",
            userAuth: {
              create: {
                last_login: new Date(),
              },
            },
          });
        }
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user?.email) {
        const userdb = await findUser({ email: user?.email as string });
        token.id = userdb?.id || "";
        token.role = userdb?.role || "Guest";
        token.name = userdb?.name || token?.name;
        token.user_pic = userdb?.user_pic as string;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.email && session.user) {
        session.user.role = token?.role || "Guest";
        session.user.id = token?.id as string;
        session.user.user_pic = token?.user_pic as string;
        session.user.name = token?.name as string;
        await updateUser(
          { email: token.email },
          {
            user_pic: session.user.image ?? undefined,
            userAuth: { update: { last_login: new Date() } },
          },
        );
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const nextGetServerSession = () => getServerSession(authOptions);
