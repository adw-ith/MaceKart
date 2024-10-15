import { CategoryRepository } from "@/app/database/category/repository";

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    const category = await CategoryRepository.deleteCategory(id);
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
