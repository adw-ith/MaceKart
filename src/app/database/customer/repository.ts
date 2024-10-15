import prisma from "../../../../lib/prisma_config";

export class CustomerRepository {
  static async createCustomer(
    name: string,
    email: string,
    phone: number,
    address: string
  ) {
    try {
      const customer = await prisma.customer.findUnique({
        where: {
          email: email,
        },
      });
      if (!customer)
        return {
          status: 444,
          message: "Customer not found",
        };

      const updatedCustomer = await prisma.customer.update({
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
        message: "Customer updated successfully",
        data: updatedCustomer,
      };
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(String(error));
      }
    }
  }

  static async updateCustomer(
    name: string | null,
    email: string,
    phone: number | null,
    address: string | null
  ) {
    try {
      // Check if the customer exists by email
      const customer = await prisma.customer.findUnique({
        where: {
          email: email,
        },
      });

      // If customer does not exist, return an appropriate message
      if (!customer) {
        return {
          status: 444,
          message: "Customer not found",
        };
      }

      // Dynamically build the data object for updating
      const updateData: { name?: string; phone?: number; address?: string } =
        {}; // Create an empty object to hold the fields to update

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

      // Update customer details where the fields are not null
      const updatedCustomer = await prisma.customer.update({
        where: {
          email: email,
        },
        data: updateData, // Only update fields that were passed
      });

      return {
        status: 200,
        message: "Customer updated successfully",
        data: updatedCustomer,
      };
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(String(error));
      }
      return {
        status: 500,
        message: "Internal Server Error",
      };
    }
  }
}
