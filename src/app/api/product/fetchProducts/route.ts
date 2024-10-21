import { ProductRepository } from "@/app/database/product/repository";

export async function GET() {
  try {
    const product = await ProductRepository.getProducts();
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
