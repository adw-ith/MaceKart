import prisma from "../../../../lib/prisma_config";

export class ReviewRepository {
  static async addReview(
    prod_id: number,
    cid: number,
    rating: number,
    comment?: string
  ) {
    try {
      const newReview = await prisma.review.create({
        data: {
          prod_id,
          cid,
          rating,
          comment,
        },
      });
      return {
        status: 201,
        message: "Review added successfully",
        data: newReview,
      };
    } catch (error) {
      console.error("Error adding review:", error);
      return {
        status: 500,
        message: "Error adding review",
        error: error,
      };
    }
  }

  // Edit Review
  static async editReview(rid: number, rating: number, comment?: string) {
    try {
      const reviewExists = await prisma.review.findUnique({ where: { rid } });

      if (!reviewExists) {
        return {
          status: 404,
          message: "Review not found",
        };
      }

      const updatedReview = await prisma.review.update({
        where: { rid },
        data: {
          rating,
          comment,
        },
      });
      return {
        status: 200,
        message: "Review updated successfully",
        data: updatedReview,
      };
    } catch (error) {
      console.error("Error updating review:", error);
      return {
        status: 500,
        message: "Error updating review",
        error: error,
      };
    }
  }

  // Delete Review
  static async deleteReview(rid: number) {
    try {
      const reviewExists = await prisma.review.findUnique({ where: { rid } });

      if (!reviewExists) {
        return {
          status: 404,
          message: "Review not found",
        };
      }

      const deletedReview = await prisma.review.delete({
        where: { rid },
      });
      return {
        status: 200,
        message: "Review deleted successfully",
        data: deletedReview,
      };
    } catch (error) {
      console.error("Error deleting review:", error);
      return {
        status: 500,
        message: "Error deleting review",
        error: error,
      };
    }
  }
}
