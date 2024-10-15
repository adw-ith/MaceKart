import { CategoryRepository } from "@/app/database/category/repository";

export async function POST(req: Request) {
  try {
    const { description } = await req.json();
    const category = await CategoryRepository.addCategory(description);
    return new Response(
      JSON.stringify({
        success: true,
        data: category,
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
