import { PurchaseRepository } from "@/app/database/purchase/repository";

export async function POST(req: Request) {
  const { cid, prod_id, sid, quantity, totalPrice } = await req.json();
  try {
    const purchase = await PurchaseRepository.createPurchase(
      cid,
      prod_id,
      sid,
      quantity,
      totalPrice
    );
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
