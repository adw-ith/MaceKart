import { ReviewRepository } from "@/app/database/review/repository";

export async function DELETE(req: Request, res: Response) {
  try {
    const { rid } = await req.json();
    const review = await ReviewRepository.deleteReview(rid);
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
