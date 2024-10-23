import { cookies } from 'next/headers';
import { decrypt } from './encryption';

export async function getEmailFromCookie()
{
    try{
        const sessionCookie = cookies().get('session')?.value; 
        if (!sessionCookie) {
            throw new Error('No session found');
        }
        const decodedSession = decrypt(sessionCookie);
        const sessionObject = JSON.parse(decodedSession);
    
        // Destructure to get the email
        const { email } = sessionObject;
        return email
    }
    catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error(String(error));
        }
      }
}