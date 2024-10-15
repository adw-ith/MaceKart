'use server';
import { cookies } from 'next/headers';
import crypto from 'crypto';
// function base64Decode(encodedData:any) {
//     return JSON.parse(Buffer.from(encodedData, 'base64').toString());
// }
const ENCRYPTION_KEY = (process.env.ENCRYPTION_KEY || 'your-key-here').padEnd(32, '0').slice(0, 32);
function decrypt(encryptedText:any) {
    const [iv, encrypted] = encryptedText.split(':'); // Split the IV and the encrypted text
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), Buffer.from(iv, 'hex'));
    
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8'); // Finalize decryption

    return decrypted; // Return the decrypted text
}
export async function GET() {
    // Retrieve the session cookie
    const sessionCookie = cookies().get('session')?.value;

    // If no session cookie is found, return a 401 (Unauthorized) response
    if (!sessionCookie) {
        return new Response(JSON.stringify({ message: 'No session found' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // Decode the base64-encoded session
    const decodedSession = decrypt(sessionCookie);

    // Return the decoded session data
    return new Response(JSON.stringify({ session: decodedSession }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}
