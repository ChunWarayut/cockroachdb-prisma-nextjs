import { compare } from 'bcryptjs';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { PrismaClient } from '@prisma/client'
import { comparePassword } from '../../../utils/encrypt';
const prisma = new PrismaClient()

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'cockroachdb-prisma-nextjs',
            credentials: {
                username: {
                    label: 'username',
                    type: 'username',
                    placeholder: 'username'
                },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials, req) {

                // console.log('credentials', credentials.username);

                const result = await prisma.user
                    .findUnique({
                        where: {
                            username: credentials.username,
                        }
                    });

                // console.log('result', result);
                if (!result) {
                    client.close();
                    throw new Error('No user found with the username');
                }

                const checkPassword = await comparePassword(credentials.password, result.password);

                // console.log('checkPassword', checkPassword)

                if (!checkPassword) {
                    client.close();
                    throw new Error(`Password doesn't match`);
                }

                // console.log('result', result);
                return result
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async jwt({ token, user, account }) {
            // console.log('jwt', token, user, account);
            // console.log('user', user);
            if (account && user) {
                return {
                    ...token,
                    ...user,
                    ...account
                };
            }

            return token;
        },

        async session({ session, token }) {
            // console.log('session', session, token);
            session.user.accessToken = token.accessToken;
            session.user.refreshToken = token.refreshToken;
            session.user.accessTokenExpires = token.accessTokenExpires;

            return { ...session, user: { ...token } };
        },
        async credentials({ credentials, req, res }) {
            // console.log('credentials', credentials, req, res);
            return credentials;
        }
    },
    theme: {
        colorScheme: 'auto', // "auto" | "dark" | "light"
        brandColor: '', // Hex color code #33FF5D
        logo: '/logo.png', // Absolute URL to image
    },
    debug: process.env.NODE_ENV === 'development',
});