import { CategoryRepository } from "@/app/database/category/repository";

export async function PUT(req: Request, res: Response) {
  try {
    const { id, description } = await req.json();
    const category = await CategoryRepository.updateCategory(id, description);
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
