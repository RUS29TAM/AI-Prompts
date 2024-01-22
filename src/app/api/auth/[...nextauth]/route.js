import NextAuth from "next-auth";
// import GoogleProvider from 'next-auth/providers/google';
import Google from "next-auth/providers/google";

console.log({
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
})

const handler = NextAuth({
    providers: [
        Google({
            GOOGLE_ID: process.env.GOOGLE_ID,
            GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {

    },

    async signIn({ profile }) {

    }
})

export  { handler as GET, handler as POST };

//https://youtu.be/wm5gMKuwSYk?feature=shared&t=4639