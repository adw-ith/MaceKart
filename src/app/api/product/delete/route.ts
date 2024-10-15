import { ProductRepository } from "@/app/database/product/repository";

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    const deletedProduct = await ProductRepository.deleteProduct(id);
    return new Response(
      JSON.stringify({
        success: true,
        data: deletedProduct,
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
