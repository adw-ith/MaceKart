import { UserRepository } from "@/app/database/user/repository";

export async function POST(req: Request) {
  const { email } = await req.json();

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
