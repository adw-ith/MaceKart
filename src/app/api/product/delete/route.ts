import { ProductRepository } from "@/app/database/product/repository";

export async function DELETE(req: Request, res: Response) {
  try {
    const { id } = await req.json();
    const deletedProduct = await ProductRepository.deleteProduct(id);
    return new Response(
      JSON.stringify({
        success: true,
        data: deletedProduct,
      })
    );
  } catch (error: any) {
    console.error(error.message);
  }
}
