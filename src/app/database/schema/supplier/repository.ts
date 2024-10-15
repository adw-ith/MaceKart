import prisma from "../../../../../lib/prisma_config";

export class SupplierRepository {
    static async createSupplier ( name : string, email : string, phone : number, address : string ) {
        try {
            const supplier = await prisma.supplier.findUnique({ where: {
                email: email,
            }});
            if (!supplier)
                return {
                  status: 444,
                  message: "Supplier not found",
                };
            
            const updatedSupplier = await prisma.supplier.update({
                where: {
                    email: email,
                },
                data: {
                    name: name,
                    phone: phone,
                    address: address,
                },
            });
    
            return {
                status: 200,
                message: "Supplier updated successfully",
                data: updatedSupplier,
            };
        } catch (error : any) {
            console.error(error.message);
        }
    }

    static async updateSupplier(name: string | null, email: string, phone: number | null, address: string | null) {
        try {
            // Check if the supplier exists by email
            const supplier = await prisma.supplier.findUnique({
                where: {
                    email: email,
                },
            });
    
            // If supplier does not exist, return an appropriate message
            if (!supplier) {
                return {
                    status: 444,
                    message: "Supplier not found",
                };
            }
    
            // Dynamically build the data object for updating
            const updateData: any = {}; // Create an empty object to hold the fields to update
    
            if (name !== null) updateData.name = name;
            if (phone !== null) updateData.phone = phone;
            if (address !== null) updateData.address = address;
    
            // If there are no fields to update, return an appropriate message
            if (Object.keys(updateData).length === 0) {
                return {
                    status: 400,
                    message: "No valid fields to update",
                };
            }
    
            // Update supplier details where the fields are not null
            const updatedSupplier = await prisma.supplier.update({
                where: {
                    email: email,
                },
                data: updateData, // Only update fields that were passed
            });
    
            return {
                status: 200,
                message: "Supplier updated successfully",
                data: updatedSupplier,
            };
        } catch (error: any) {
            console.error(error.message);
            return {
                status: 500,
                message: "Internal Server Error",
            };
        }
    }
}