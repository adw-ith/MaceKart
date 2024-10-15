'use server';
import { cookies } from 'next/headers';
import crypto from 'crypto';

const ENCRYPTION_KEY = (process.env.ENCRYPTION_KEY || 'your-key-here').padEnd(32, '0').slice(0, 32);
const IV_LENGTH = 16;

function encrypt(text:any) {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return `${iv.toString('hex')}:${encrypted}`;
}

export async function POST() {
    const user = { email: 'user@example.com', password: 'password123' };
    const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7); // 1 week

    const session = encrypt(JSON.stringify({ user, expires }));
    cookies().set('session', session, { expires, httpOnly: true, secure: process.env.NODE_ENV === 'production', path: '/' });

    return new Response(JSON.stringify({ message: 'Cookie set successfully' }), { status: 200 });
}
