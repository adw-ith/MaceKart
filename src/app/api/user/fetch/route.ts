import { UserRepository } from "@/app/database/user/repository";
import { getEmailFromCookie } from "@/app/functions/getEmailFromCookie";

export async function POST(req: Request) {
  // const { email } = await req.json();
  const email = await getEmailFromCookie();
  if (!email) {
    throw new Error("cookie issue");
  }
  try {
    const user = await UserRepository.getUser(email);
    return new Response(
      JSON.stringify({
        success: true,
        data: user,
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
