import { UserRepository } from "@/app/database/schema/user/repository";

export async function POST(req: any, res: any) {
  try {
    const { email, password } = await req.json();
    const data = await UserRepository.loginUser(email, password);
    return new Response(
      JSON.stringify({
        success: true,
        data,
      })
    );
  } catch (error: any) {
    console.error(error.message);
  }
}
