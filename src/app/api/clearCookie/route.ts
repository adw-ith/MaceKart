'use server';
import { cookies } from 'next/headers';

export async function GET() {
    const allCookies = cookies(); // Get the cookies instance

    // Get the 'session' cookie and clear it if it exists
    const sessionCookie = allCookies.get('session');
    if (sessionCookie) {
        allCookies.set('session', '', {
            expires: new Date(0), // Set expiration to a past date
            path: '/' // Ensure it applies to all paths
        });
    }

    return new Response(JSON.stringify({ message: 'Session cookie cleared' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}
