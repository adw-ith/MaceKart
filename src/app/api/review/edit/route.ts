import { ReviewRepository } from "@/app/database/review/repository";

export async function PUT(req: Request) {
  try {
    const { rid, rating, comment } = await req.json();
    const review = await ReviewRepository.editReview(rid, rating, comment);
    return new Response(
      JSON.stringify({
        success: true,
        data: review,
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
