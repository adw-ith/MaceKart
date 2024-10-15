import { CustomerRepository } from "@/app/database/customer/repository";

export async function POST(req: Request) {
  try {
    const { name, email, phone, address } = await req.json();
    const data = await CustomerRepository.createCustomer(
      name,
      email,
      phone,
      address
    );
    return new Response(
      JSON.stringify({
        success: true,
        data,
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
