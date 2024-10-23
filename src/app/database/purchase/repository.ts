import prisma from "../../../../lib/prisma_config";

export class PurchaseRepository {
  static async createPurchase(
    cid: number,
    prod_id: number,
    sid: number,
    quantity: number,
    totalPrice: number
  ) {
    try {
      const newPurchase = await prisma.purchase.create({
        data: {
          cid: cid,
          prod_id: prod_id,
          sid: sid,
          quantity: quantity,
          totalPrice: totalPrice,
        },
      });
      return newPurchase;
    } catch (error) {
      console.error("Error purchasing:", error);
      return {
        status: 500,
        message: "Error purchasing",
        error: error,
      };
    }
  }

  static async fetchPurchase(c_id?: number, s_id?: number) {
    try {
      const purchases = await prisma.purchase.findMany({
        where: {
          ...(c_id ? { cid: c_id } : {}),
          ...(s_id ? { sid: s_id } : {}),
        },
      });
      return purchases;
    } catch (error) {
      console.error("Error fetching purchases:", error);
      throw error;
    }
  }
}
