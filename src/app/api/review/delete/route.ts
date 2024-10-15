import { ReviewRepository } from "@/app/database/review/repository";

export async function DELETE(req: Request) {
  try {
    const { rid } = await req.json();
    const review = await ReviewRepository.deleteReview(rid);
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
