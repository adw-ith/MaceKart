import { ProductRepository } from "@/app/database/product/repository";

export async function PUT(req: Request) {
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
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(String(error));
    }
  }
}
