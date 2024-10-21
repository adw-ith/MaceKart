import prisma from "../../../../lib/prisma_config";

export class ProductRepository {
  static async addProduct(
    name: string,
    price: number,
    quantity: number,
    description: string | null = null,
    sid: number,
    categoryId: number
  ) {
    try {
      const newProduct = await prisma.product.create({
        data: {
          name: name,
          description: description,
          price: price,
          quantity: quantity,
          sid: sid,
          categoryId: categoryId,
        },
      });
      return {
        status: 201,
        message: "Product added successfully",
        data: newProduct,
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

  static async deleteProduct(prod_id: number) {
    try {
      const product = await prisma.product.findUnique({
        where: {
          prod_id: prod_id,
        },
      });

      if (!product) {
        return {
          status: 404,
          message: "Product not found",
        };
      }

      await prisma.product.delete({
        where: {
          prod_id: prod_id,
        },
      });

      return {
        status: 200,
        message: "Product deleted successfully",
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

  static async updateProduct(
    prod_id: number,
    name: string | null = null,
    price: number | null = null,
    quantity: number | null = null,
    description: string | null = null
  ) {
    try {
      const product = await prisma.product.findUnique({
        where: {
          prod_id: prod_id,
        },
      });

      if (!product) {
        return {
          status: 404,
          message: "Product not found",
        };
      }

      // Build the update data dynamically
      const updateData: {
        name?: string;
        price?: number;
        quantity?: number;
        description?: string;
      } = {};
      if (name !== null) updateData.name = name;
      if (price !== null) updateData.price = price;
      if (quantity !== null) updateData.quantity = quantity;
      if (description !== null) updateData.description = description;

      if (Object.keys(updateData).length === 0) {
        return {
          status: 400,
          message: "No valid fields to update",
        };
      }

      const updatedProduct = await prisma.product.update({
        where: {
          prod_id: prod_id,
        },
        data: updateData,
      });

      return {
        status: 200,
        message: "Product updated successfully",
        data: updatedProduct,
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

  static async getProducts() {
    try {
      const products = await prisma.product.findMany({
        include: {
          supplier: true, // Include supplier details if needed
          category: true, // Include category details if needed
          reviews: false, // Include reviews if needed
          purchases: false, // Include purchases if needed
        },
      });
      return products;
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

  static async getProductById(prod_id: number) {
    try {
      const product = await prisma.product.findUnique({
        where: {
          prod_id: prod_id,
        },
        include: {
          supplier: true, // Include supplier if needed
          category: true, // Include category if needed
          reviews: true, // Include reviews if needed
          purchases: false, // Include purchases if needed
        },
      });

      if (!product) {
        throw new Error(`Product with id ${prod_id} not found`);
      }

      return product;
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
