import { SupplierRepository } from "@/app/database/supplier/repository";

export async function POST(req: Request) {
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
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(String(error));
    }
  }
}
