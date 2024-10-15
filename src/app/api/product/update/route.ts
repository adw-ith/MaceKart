import { ProductRepository } from "@/app/database/product/repository";

export async function PUT(req: Request, res: Response) {
  try {
    const { id, name, price, quantity, description } = await req.json();
    const product = await ProductRepository.updateProduct(
      id,
      name,
      price,
      quantity,
      description
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
