import { PurchaseRepository } from "@/app/database/purchase/repository";

export async function PUT(req: Request) {
  const { c_id, s_id } = await req.json();
  try {
    const purchase = await PurchaseRepository.fetchPurchase(c_id, s_id);
    return new Response(
      JSON.stringify({
        success: true,
        data: purchase,
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
