'use server';
import { cookies } from 'next/headers';

export async function POST() {
    const allCookies = cookies(); // Get the cookies instance

    // Loop through all cookies and clear them
    allCookies.getAll().forEach(cookie => {
        allCookies.set(cookie.name, '', {
            expires: new Date(0), // Set expiration to a past date
            path: '/' // Ensure it applies to all paths
        });
    });

    return new Response(JSON.stringify({ message: 'All cookies cleared' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}
