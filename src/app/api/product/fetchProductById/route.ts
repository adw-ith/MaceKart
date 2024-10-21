import { ProductRepository } from "@/app/database/product/repository";

export async function POST(req: Request) {
  const { product_id } = await req.json();
  try {
    const product = await ProductRepository.getProductById(product_id);
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
