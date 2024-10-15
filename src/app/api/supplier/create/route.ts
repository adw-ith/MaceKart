import { SupplierRepository } from "@/app/database/supplier/repository";

export async function POST(req: Request, res: Response) {
  try {
    const { name, email, phone, address } = await req.json();
    const supplier = await SupplierRepository.createSupplier(
      name,
      email,
      phone,
      address
    );
    return new Response(
      JSON.stringify({
        success: true,
        data: supplier,
      })
    );
  } catch (error: any) {
    console.error(error.message);
  }
}
