import prisma from "../../../../lib/prisma_config";

export class CategoryRepository {
  static async addCategory(description: string) {
    try {
      const newCategory = await prisma.category.create({
        data: {
          description: description,
        },
      });
      return {
        status: 201,
        message: "Category added successfully",
        data: newCategory,
      };
    } catch (error: any) {
      console.error(error.message);
      return {
        status: 500,
        message: "Internal Server Error",
      };
    }
  }

  static async deleteCategory(cat_id: number) {
    try {
      const category = await prisma.category.findUnique({
        where: {
          cat_id: cat_id,
        },
      });

      if (!category) {
        return {
          status: 404,
          message: "Category not found",
        };
      }

      await prisma.category.delete({
        where: {
          cat_id: cat_id,
        },
      });

      return {
        status: 200,
        message: "Category deleted successfully",
      };
    } catch (error: any) {
      console.error(error.message);
      return {
        status: 500,
        message: "Internal Server Error",
      };
    }
  }

  static async updateCategory(
    cat_id: number,
    description: string | null = null
  ) {
    try {
      const category = await prisma.category.findUnique({
        where: {
          cat_id: cat_id,
        },
      });

      if (!category) {
        return {
          status: 404,
          message: "Category not found",
        };
      }

      // Build the update data dynamically
      const updateData: any = {};
      if (description !== null) updateData.description = description;

      if (Object.keys(updateData).length === 0) {
        return {
          status: 400,
          message: "No valid fields to update",
        };
      }

      const updatedCategory = await prisma.category.update({
        where: {
          cat_id: cat_id,
        },
        data: updateData,
      });

      return {
        status: 200,
        message: "Category updated successfully",
        data: updatedCategory,
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
