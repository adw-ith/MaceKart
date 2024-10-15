import { CustomerRepository } from "@/app/database/customer/repository";

export async function PUT(req: Request, res: Response) {
  try {
    const { name, email, phone, address } = await req.json();
    const user = await CustomerRepository.updateCustomer(
      name,
      email,
      phone,
      address
    );
    return new Response(
      JSON.stringify({
        success: true,
        data: user,
      })
    );
  } catch (error: any) {
    console.error(error.message);
  }
}
