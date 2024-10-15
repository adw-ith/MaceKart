import { ReviewRepository } from "@/app/database/review/repository";

export async function PUT(req: Request, res: Response) {
  try {
    const { rid, rating, comment } = await req.json();
    const review = await ReviewRepository.editReview(rid, rating, comment);
    return new Response(
      JSON.stringify({
        success: true,
        data: review,
      })
    );
  } catch (error: any) {
    console.error(error.message);
  }
}
