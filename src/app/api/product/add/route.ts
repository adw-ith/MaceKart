import { ProductRepository } from "@/app/database/product/repository";

export async function POST(req: Request, res: Response) {
  try {
    const { name, price, quantity, description, sid, categoryId } =
      await req.json();
    const product = await ProductRepository.addProduct(
      name,
      price,
      quantity,
      description,
      sid,
      categoryId
    );
    return new Response(
      JSON.stringify({
        success: true,
        data: product,
      })
    );
  } catch (error: any) {
    console.error(error.message);
  }
}
