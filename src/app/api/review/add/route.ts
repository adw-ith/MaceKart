import { ReviewRepository } from "@/app/database/review/repository";

export async function POST(req: Request, res: Response) {
  try {
    const { prod_id, cid, rating, comment } = await req.json();
    const review = await ReviewRepository.addReview(
      prod_id,
      cid,
      rating,
      comment
    );
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
