import { CategoryRepository } from "@/app/database/category/repository";

export async function DELETE(req: Request, res: Response) {
  try {
    const { id } = await req.json();
    const category = await CategoryRepository.deleteCategory(id);
    return new Response(
      JSON.stringify({
        success: true,
        data: category,
      })
    );
  } catch (error: any) {
    console.error(error.message);
  }
}
