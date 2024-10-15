import { CustomerRepository } from "@/app/database/schema/customer/repository";

export async function POST( req: any, res: any ) {
    try {
        const { name, email, phone, address } = await req.json();
        const data = await CustomerRepository.createCustomer( name, email, phone, address );
        return new Response(
            JSON.stringify({
              success: true,
              data,
            })
          );
    } catch (error: any) {
        console.error(error.message);
    }
}