import { CategoryRepository } from "@/app/database/category/repository";

export async function PUT(req: Request) {
  try {
    const { id, description } = await req.json();
    const category = await CategoryRepository.updateCategory(id, description);
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
