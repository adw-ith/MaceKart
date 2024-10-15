import { CategoryRepository } from "@/app/database/category/repository";

export async function POST(req: Request, res: Response) {
  try {
    const { description } = await req.json();
    const category = await CategoryRepository.addCategory(description);
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
