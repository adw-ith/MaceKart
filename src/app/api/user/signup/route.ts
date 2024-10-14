import { UserRepository } from "@/app/database/schema/user/repository";

export async function POST(req: any, res: any) {
  try {
    const { email, password, role } = await req.json();
    const data = await UserRepository.signUpUser(email, password, role);
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
