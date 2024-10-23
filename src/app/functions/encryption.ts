import crypto from 'crypto';
const ENCRYPTION_KEY = (process.env.ENCRYPTION_KEY || 'your-key-here').padEnd(32, '0').slice(0, 32);
const IV_LENGTH = 16;

export function encrypt(text: string): string {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return `${iv.toString('hex')}:${encrypted}`;
}

export function decrypt(encryptedText:string) {
    const [iv, encrypted] = encryptedText.split(':'); // Split the IV and the encrypted text
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), Buffer.from(iv, 'hex'));
    
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8'); // Finalize decryption

    return decrypted; // Return the decrypted text
}