import { UserRepository } from "@/app/database/user/repository";
import { createCookie } from "@/app/functions/createCookie";

export async function POST(req: Request) {
  try {
    const { email, password, role } = await req.json();
    await createCookie(email);
    const data = await UserRepository.signUpUser(email, password, role);
    return new Response(
      JSON.stringify({
        success: true,
        data,
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(String(error));
    }
  }
}
